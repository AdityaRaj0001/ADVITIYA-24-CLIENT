"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
const SignIn = () => {
    const Router = useRouter();
  return (
    <>
      <div
        id="main"
        className="w-100vw bg-transparent h-screen relative flex flex-col items-center justify-center md:flex-row "
      >
        <div
          id="left"
          className="w-full bg-cover sm:bg-none bg-center md:bg-[url('https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif')]  h-screen absolute   bg-black md:static md:w-1/2 "
        ></div>
        <div
          id="right"
          className="w-full z-10   h-auto flex flex-col items-center justify-center md:w-1/2 "
        >
          <Card className="w-[85%] sm:w-[70%] md:w-[85%] max-w-xl  bg-black bg-cover bg-center bg-[url('https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif')] md:bg-none  text-white">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Welcome Back.</CardTitle>
              <CardDescription>Nice to have you here again</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <Button onClick={() => Router.push("/auth")}>
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground bg-black">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="text-xs lg:text-sm text-black"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="text-black" />
              </div>
            </CardContent>
            <CardFooter className="flex-col">
              <Button className="w-full mb-2" onClick={() => Router.push("/auth")}>
                Login
              </Button>
              <Button
                className="w-full text-[10px] sm:text-[12px]"
                variant={"secondary"}
                onClick={() => Router.push('/signup')}
              >
                Not a Registered User ? SignUp.
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignIn;
