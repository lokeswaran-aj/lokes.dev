import { NextRequest } from "next/server"
import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"
import Icons from "@/components/ui/Icons"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
export const runtime = "nodejs"

const interFont = readFile(join(process.cwd(), "assets/fonts/inter.ttf"))
  .then((data) => new Uint8Array(data).buffer)

export async function GET(req: NextRequest) {
  try {
    const font = await interFont

    const { searchParams } = req.nextUrl
    const title = searchParams.get("title")
    if (!title) return new Response("Title is required", { status: 400 })
    const heading = title.length > 35 ? `${title.slice(0, 140)}...` : title

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
            backgroundColor: "#A9C9FF",
          }}
          tw="flex relative flex-col p-12 w-full h-full items-start text-black"
        >
          <div tw="flex items-center">
            <Icons.logo />
            <p tw="ml-2 font-bold text-2xl">Lokeswaran Blog</p>
          </div>
          <div tw="flex flex-col flex-1 mt-20">
            <div tw="flex text-xl uppercase font-bold font-normal">
              BLOG POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{siteConfig.links.url}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: font,
            style: "normal",
            weight: 500,
          },
        ],
      }
    )
  } catch {
    return new Response("Failed to generate image", { status: 500 })
  }
}
