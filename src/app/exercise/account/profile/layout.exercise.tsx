import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  // 🐶 Le Layout ne fait rien pour le moment que transmettre le children
  return (
    <div
      // 🤖 Décommente le style (tailwind) ci-dessous pour avoir une zone orange
      className="flex h-[200px] w-[400px] flex-col items-center justify-center border-4 border-yellow-700 bg-yellow-500 font-bold text-white"
    >
      {/* 🐶 Ajoute le titre 'Zone Danger' */}
      <h1>Zone Danger</h1>
      {children}
    </div>
  )
}
