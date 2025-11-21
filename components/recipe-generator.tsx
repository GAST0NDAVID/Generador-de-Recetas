"use client"

import { useState } from "react"
import { ChefHat, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import RecipeCard from "./recipe-card"
import { recipes } from "@/lib/recipes"

export default function RecipeGenerator() {
  const [currentRecipe, setCurrentRecipe] = useState<(typeof recipes)[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateRandomRecipe = () => {
    setIsLoading(true)
    // Simulate loading for visual feedback
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recipes.length)
      setCurrentRecipe(recipes[randomIndex])
      setIsLoading(false)
    }, 600)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 gap-8">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <ChefHat className="w-10 h-10 text-primary" />
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Generador de Recetas</h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Descubre recetas deliciosas con un solo clic. Cada receta incluye ingredientes detallados y pasos claros para
          cocinar como un profesional.
        </p>
      </div>

      {/* Generate Button with Loading State */}
      <div className="flex gap-3">
        <Button
          onClick={generateRandomRecipe}
          disabled={isLoading}
          size="lg"
          className="button-press px-8 py-6 text-lg font-semibold gap-2 relative"
        >
          {isLoading ? (
            <>
              <span className="animate-spin">⏳</span>
              Buscando receta...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generar Receta
            </>
          )}
        </Button>

        {currentRecipe && (
          <Button onClick={() => setCurrentRecipe(null)} variant="outline" size="lg" className="px-6 py-6 gap-2">
            <RotateCcw className="w-5 h-5" />
            Limpiar
          </Button>
        )}
      </div>

      {/* Recipe Display or Empty State */}
      {currentRecipe ? (
        <RecipeCard recipe={currentRecipe} />
      ) : (
        <div className="text-center py-16 max-w-md space-y-4">
          <div className="text-6xl mb-4">🍳</div>
          <p className="text-xl text-muted-foreground font-medium">
            Presiona el botón para generar una receta aleatoria
          </p>
          <p className="text-sm text-muted-foreground">Tenemos {recipes.length} recetas deliciosas esperando por ti</p>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full text-center mt-8 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2025 Generador de Recetas. Todas las recetas son caseras y probadas.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>
      </footer>
    </div>
  )
}
