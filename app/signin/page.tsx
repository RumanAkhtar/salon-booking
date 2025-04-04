"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false)
      // Uncomment the following line to simulate an error
      // setError("Invalid email or password")
    }, 3000)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline">
                <Icons.facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </div>
            </form>
            {error && (
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground text-center">
              <Link className="hover:text-primary underline underline-offset-4" href="/forgot-password">
                Forgot your password?
              </Link>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              Don&apos;t have an account?{" "}
              <Link className="hover:text-primary underline underline-offset-4" href="/signup">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

