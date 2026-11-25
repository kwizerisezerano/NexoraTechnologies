export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { messages, model } = body

  if (!messages || !Array.isArray(messages)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Messages array is required'
    })
  }

  const config = useRuntimeConfig()
  const apiKey = config.openRouterApiKey

  if (!apiKey) {
    console.error('OPENROUTER_API_KEY not found in runtime config')
    throw createError({
      statusCode: 500,
      statusMessage: 'OpenRouter API key not configured. Please add OPENROUTER_API_KEY to your environment variables in Vercel.'
    })
  }

  console.log('Calling OpenRouter API with model:', model || 'nvidia/nemotron-3-ultra-550b-a55b:free')

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://nexoratechnologies.com',
        'X-Title': 'Nexora Technologies'
      },
      body: JSON.stringify({
        model: model || 'nvidia/nemotron-3-ultra-550b-a55b:free',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant for Nexora Technologies, a Rwanda-based software development company. Nexora currently focuses exclusively on SOFTWARE DEVELOPMENT services including: web applications, mobile apps, backend APIs, SaaS products, databases, enterprise systems, payment integrations, and custom software solutions. Do NOT mention IoT, networking, IT infrastructure, or hardware services as these are planned for future expansion but not currently offered. Keep responses focused on software development capabilities. Be professional, friendly, and helpful.'
          },
          ...messages
        ]
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('OpenRouter API error:', data)
      throw createError({
        statusCode: response.status,
        statusMessage: data.error?.message || data.message || 'OpenRouter API error'
      })
    }

    if (data.error) {
      console.error('OpenRouter error response:', data.error)
      throw createError({
        statusCode: 500,
        statusMessage: data.error.message || 'OpenRouter API error'
      })
    }

    console.log('OpenRouter API success')
    return data
  } catch (error: any) {
    console.error('OpenRouter API call failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to call OpenRouter API'
    })
  }
})
