
export const metadata = {
  title: 'Interlude',
  description: 'Your productivty friend...',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        {/* NAVIGATION COMPONENT HERE... */}
        {children}
    </body>
    </html>
  )
}
