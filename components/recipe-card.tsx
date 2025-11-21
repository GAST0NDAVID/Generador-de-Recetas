"use client"

import { Clock, Clock8, Users, ChefHat, Leaf } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Recipe, categoryIcons, difficultyLabels } from "@/lib/recipes"

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const totalTime = recipe.prepTime + recipe.cookTime

  const difficultyColors = {
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  }

  return (
    <Card className="w-full max-w-3xl recipe-fade-in shadow-xl border-0">
      <div className="p-6 md:p-10 space-y-8">
        {/* Header with Title and Meta Info */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{categoryIcons[recipe.category]}</span>
                <h2 className="text-4xl md:text-5xl font-bold text-balance">{recipe.name}</h2>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {recipe.accompaniments && `Acompañamientos: ${recipe.accompaniments}`}
              </p>
            </div>
          </div>

          {/* Tags and Difficulty */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className={difficultyColors[recipe.difficulty]}>
              {difficultyLabels[recipe.difficulty]}
            </Badge>
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Time and Servings Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-secondary p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Prep</span>
              </div>
              <p className="text-lg font-bold">{recipe.prepTime}m</p>
            </div>
            <div className="bg-secondary p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock8 className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Cocción</span>
              </div>
              <p className="text-lg font-bold">{recipe.cookTime}m</p>
            </div>
            <div className="bg-secondary p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <ChefHat className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Total</span>
              </div>
              <p className="text-lg font-bold">{totalTime}m</p>
            </div>
            <div className="bg-secondary p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Porciones</span>
              </div>
              <p className="text-lg font-bold">{recipe.servings}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Ingredients */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            Ingredientes
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
                <span className="mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-foreground leading-relaxed">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-primary" />
            Pasos
          </h3>
          <ol className="space-y-3">
            {recipe.steps.map((step, index) => (
              <li key={index} className="flex gap-4 group">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  {index + 1}
                </span>
                <p className="pt-1.5 text-foreground leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Card>
  )
}
