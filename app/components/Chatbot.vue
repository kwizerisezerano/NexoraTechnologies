<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Button -->
    <button
      @click="isOpen = !isOpen"
      class="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-105"
    >
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Chat Window -->
    <div
      v-if="isOpen"
      class="absolute bottom-20 right-0 w-96 bg-white rounded-xl shadow-2xl overflow-hidden"
    >
      <!-- Header -->
      <div class="bg-green-600 px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <div class="text-white font-semibold text-sm">Nexora AI Assistant</div>
            <div class="text-green-100 text-xs">Online</div>
          </div>
        </div>
        <button @click="clearChat" class="text-white/80 hover:text-white text-xs">
          Clear
        </button>
      </div>

      <!-- Messages -->
      <div class="h-80 overflow-y-auto p-4 bg-slate-50 space-y-3" ref="messagesContainer">
        <div v-if="messages.length === 0" class="flex flex-col items-center justify-center h-full text-center">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <p class="text-slate-600 text-sm">Hi! I'm Nexora AI. Ask me about our software development services.</p>
        </div>

        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'flex gap-2',
            message.role === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[80%] rounded-lg px-3 py-2 text-sm',
              message.role === 'user'
                ? 'bg-green-600 text-white'
                : 'bg-white border border-slate-200 text-slate-800'
            ]"
          >
            <p class="whitespace-pre-wrap">{{ message.content }}</p>
          </div>
        </div>

        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-white border border-slate-200 rounded-lg px-3 py-2">
            <div class="flex gap-1">
              <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-3 border-t border-slate-200 bg-white">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="userInput"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            :disabled="isLoading"
          />
          <button
            type="submit"
            :disabled="isLoading || !userInput.trim()"
            class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 text-white text-sm font-medium rounded-lg transition"
          >
            {{ isLoading ? '...' : 'Send' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const messages = ref<Array<{ role: string; content: string }>>([])
const userInput = ref('')
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const userMessage = userInput.value.trim()
  messages.value.push({ role: 'user', content: userMessage })
  userInput.value = ''
  isLoading.value = true
  await scrollToBottom()

  try {
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        messages: messages.value,
        model: 'nvidia/nemotron-3-ultra-550b-a55b:free'
      }
    })

    const assistantMessage = response.choices[0]?.message?.content || 'No response from AI'
    messages.value.push({ role: 'assistant', content: assistantMessage })
  } catch (error: any) {
    console.error('Chatbot error:', error)
    let errorMessage = 'Failed to get response. Please try again.'

    if (error.data?.statusMessage) {
      errorMessage = error.data.statusMessage
    } else if (error.message) {
      errorMessage = error.message
    }

    messages.value.push({
      role: 'assistant',
      content: `Error: ${errorMessage}`
    })
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

const clearChat = () => {
  messages.value = []
}
</script>
