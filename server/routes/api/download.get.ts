import { Readable } from 'node:stream'

// Streams the latest Android APK from GitHub Releases back to the visitor so the
// file downloads in place (Content-Disposition: attachment) without ever
// navigating away from the site.
export default defineEventHandler(async (event) => {
  const { public: { androidApkUrl } } = useRuntimeConfig()
  const upstream = await fetch(androidApkUrl as string, { redirect: 'follow' })

  if (!upstream.ok || !upstream.body) {
    throw createError({ statusCode: 502, statusMessage: 'Unable to fetch the Android app right now.' })
  }

  setHeader(event, 'Content-Type', 'application/vnd.android.package-archive')
  setHeader(event, 'Content-Disposition', 'attachment; filename="nexora-technologies.apk"')

  return sendStream(event, Readable.fromWeb(upstream.body as any))
})
