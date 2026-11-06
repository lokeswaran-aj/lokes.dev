import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { siteConfig } from '@/config/site'

export const alt = `${siteConfig.name}, ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Dark theme tokens from app/globals.css (.dark).
const BG = 'hsl(0 0% 7%)'
const FG = 'hsl(0 0% 100%)'
const MUTED = 'hsl(0 0% 80% / 0.8)'
// One matte neutral; no colour accents beyond the portrait itself.
const LINE = 'hsl(0 0% 100% / 0.14)'
const SURFACE = 'hsl(0 0% 11%)'

/** Satori spaces Geist words unevenly, so lay words out with an explicit flex gap. */
function Words({ text, gap, style }: { text: string; gap: string; style: React.CSSProperties }) {
  return (
    <div style={{ display: 'flex', gap, ...style }}>
      {text.split(' ').map((word, i) => (
        <span key={i}>{word}</span>
      ))}
    </div>
  )
}

const font = (path: string) => readFile(join(process.cwd(), 'node_modules/geist/dist/fonts', path))

export default async function Image() {
  const [bold, medium, mono, avatar] = await Promise.all([
    font('geist-sans/Geist-Bold.ttf'),
    font('geist-sans/Geist-Medium.ttf'),
    font('geist-mono/GeistMono-Medium.ttf'),
    readFile(join(process.cwd(), 'assets/og-avatar.png')),
  ])
  const avatarSrc = `data:image/png;base64,${avatar.toString('base64')}`
  const host = new URL(siteConfig.links.url).host

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          background: BG,
          color: FG,
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
          {/* Portrait with orbit ring and voice pill, as in the hero. */}
          <div style={{ display: 'flex', position: 'relative', width: 168, height: 168 }}>
            <div
              style={{
                position: 'absolute',
                top: -12,
                left: -12,
                width: 192,
                height: 192,
                borderRadius: 9999,
                border: `3px solid ${LINE}`,
                borderTopColor: 'hsl(0 0% 100% / 0.55)',
              }}
            />
            <img src={avatarSrc} width={168} height={168} style={{ borderRadius: 9999 }} alt="" />
            <div
              style={{
                position: 'absolute',
                right: -16,
                bottom: -2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                width: 70,
                height: 44,
                borderRadius: 22,
                border: `2px solid ${LINE}`,
                background: SURFACE,
              }}
            >
              {[0.45, 0.8, 1, 0.65, 0.4].map((h, i) => (
                <div key={i} style={{ width: 5, height: 24 * h, borderRadius: 3, background: 'hsl(0 0% 85%)' }} />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Words text={siteConfig.name} gap="0.08em" style={{ fontSize: 68, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }} />
            <Words text={siteConfig.role} gap="0.24em" style={{ fontSize: 32, fontWeight: 500, color: MUTED }} />
          </div>
        </div>

        {/* Bottom-right: X overlays the link title on the bottom-left corner. */}
        <div
          style={{
            position: 'absolute',
            right: 72,
            bottom: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 22px',
            borderRadius: 9999,
            border: `1.5px solid ${LINE}`,
            background: SURFACE,
            fontFamily: 'Geist Mono',
            fontSize: 26,
            color: FG,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 9999, background: MUTED }} />
          {host}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: bold, weight: 700, style: 'normal' },
        { name: 'Geist', data: medium, weight: 500, style: 'normal' },
        { name: 'Geist Mono', data: mono, weight: 500, style: 'normal' },
      ],
    }
  )
}
