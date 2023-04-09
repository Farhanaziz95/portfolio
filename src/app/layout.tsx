import './globals.css'

export const metadata = {
  title: 'Portfolio - Farhan Aziz Umrani',
  description: 'A Simple Single Page Design Using Next.JS Tailwind Css and Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 bg-white">

        {children}

        
      </body>
    </html>
  )
}
