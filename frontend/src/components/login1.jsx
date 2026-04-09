import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Login1 = ({
  heading = "Faça login",

  logo = {
    src: "/logo_techrent.svg",
    alt: "logo",
  },

  buttonText = "Entrar",
  signupText = "Não tem uma conta?",
  signupUrl = "",
  className,
}) => {
  return (
    <section className={cn("h-screen bg-muted", className)}>
      <div className="flex h-full pt-45 justify-center">
        
        <div className="flex flex-col items-center gap-15 lg:justify-start">

          <img src={logo.src} alt={logo.alt} className="h-15" />

          <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md md:scale-110">
            {heading && <h1 className="text-2xl font-semibold mb-2">{heading}</h1>}
            <Input
              type="email"
              placeholder="Email"
              className="text-sm"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              className="text-sm"
              required
            />
            <Button type="submit" className="w-50 text-lg h-11 mt-2">
              {buttonText}
            </Button>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="font-medium text-primary hover:underline"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login1 };
