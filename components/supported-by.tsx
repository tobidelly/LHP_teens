"use client"

import Image from "next/image"

export default function SupportedBy() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Supported By</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          We are backed by world-class organizations that believe in our mission.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <SupportLogo src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/277759419_278565524466811_8078794522524451920_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KvHbM6aVzVwQ7kNvgENvtJu&_nc_oc=Adg5TvBeS51u8x6kExKdgsOb6gXefAYjveMth4R-sAih2Y-WSRuAX7ttDkHzkwRvuI4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=A8PIzBAd5SS1XL2iRZKXFmx&oh=00_AYFszKpBCJlnEsdKJJz2Gtv-V_rx_MRsUshiVKGTfLfHMQ&oe=67D8AC61" alt="Company 1" />
          <SupportLogo src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/326984504_1256520531884023_3859968671070537776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7wxVqAkbMeEQ7kNvgFJdaAK&_nc_oc=AdgsE2JOymnqciGFBdxTcaP9PjSAh-gmzhoZX7XehDFyY0l8AduHL-6fycZbgINQ0zo&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=A8ZdZYN6KcCUl7DyPGByzbE&oh=00_AYG0anovoqVyd-XcANVNLUzyZJVXeFDWbd5ArP0w1mOQUg&oe=67D8BDC5" alt="Company 2" />
          <SupportLogo src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/326470050_621328279714967_3660944763364728266_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=F-mn_QD_6AUQ7kNvgG_Hk1Y&_nc_oc=AdjDG9Qu8X8OMSnEY21rFRPF0VA4IxPBhxJPfyno0w1oS-ALmpVkgK07ove9CeeE9J4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=AtnIbblmb9Z7cLJ4P_0CN-v&oh=00_AYFuv3faL0azSVSN9JHWmtQGT1F5KC8n30MAdQOteARtqA&oe=67D8BD45" alt="Company 3" />
          <SupportLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rccg_logo.png/600px-Rccg_logo.png?20200506204115" alt="Company 4" />
        </div>
      </div>
    </section>
  )
}

function SupportLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md p-4">
      <Image src={src} alt={alt} width={80} height={80} className="object-contain" />
    </div>
  )
}
