import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Download,
  ArrowRight,
  Star,
  Search,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PetAdoptionLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div>
            <Image
              src="/logo-horizontal.png"
              alt="Logo do aplicativo Acha Patas"
              className="object-contain h-12 w-auto"
              height={48}
              width={180}
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Recursos
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Como Funciona
            </Link>
            <Link
              href="#mission"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Nossa Missão
            </Link>
            <Link
              href="#download"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Download
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#download">Baixe o App</Link>
            </Button>
            {/* <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-16 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Encontre Seu Companheiro Pet Perfeito
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Acha Patas conecta lares amorosos com pets que precisam de
                    um lar. Navegue, combine e adote com apenas alguns toques.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-green hover:bg-brand-green/90 text-white"
                  >
                    <Link href="#download">
                      <Download className="mr-2 h-4 w-4" />
                      Baixe Agora
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#how-it-works">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <div className="text-muted-foreground">Novo no Brasil</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[320px] lg:h-[500px] lg:w-[400px] antialiased">
                  <Image
                    src="/app-showcase-hero.png?height=900&width=600"
                    alt="Telas do aplicativo"
                    className="object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 justify-items-center">
                <div className="inline-block rounded-lg bg-brand-green-light px-3 py-1 text-sm text-brand-green">
                  Recursos do App
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tudo o Que Você Precisa Para Encontrar Seu Pet
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acha Patas torna o processo de adoção simples, transparente e
                  alegre com estes recursos poderosos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-brand-green-light p-3">
                  <Search className="h-6 w-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold">Pesquisa Avançada</h3>
                <p className="text-center text-muted-foreground">
                  Combinamos você com pets com base em suas preferências
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-brand-green-light p-3">
                  <PlusCircle className="h-6 w-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold">Anuncie</h3>
                <p className="text-center text-muted-foreground">
                  Anuncie um animal para adoção em poucos cliques
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-brand-green-light p-3">
                  <MessageSquare className="h-6 w-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold">Chat Integrado</h3>
                <p className="text-center text-muted-foreground">
                  Mensagens diretas para os atuais donos do pet escolhido
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-green-light px-3 py-1 text-sm text-brand-green">
                  Processo Simples
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Como o Acha Patas Funciona
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encontrar seu companheiro pet perfeito está a apenas alguns
                  passos simples.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-baseline gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Crie Sua Conta</h3>
                <p className="text-center text-muted-foreground">
                  Processo rápido e simples
                </p>
                <div className="absolute -right-6 top-2 hidden h-0.5 w-full bg-brand-green-light lg:block lg:w-1/2"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Navegue & Combine</h3>
                <p className="text-center text-muted-foreground">
                  Descubra e conecte-se com o dono
                </p>
                <div className="absolute -left-6 top-2 hidden h-0.5 w-1/2 bg-brand-green-light lg:block"></div>
                <div className="absolute -right-6 top-2 hidden h-0.5 w-1/2 bg-brand-green-light lg:block"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Conheça & Adote</h3>
                <p className="text-center text-muted-foreground">
                  Agende um encontro e dê as boas-vindas ao seu novo pet
                </p>
                <div className="absolute -left-6 top-2 hidden h-0.5 w-1/2 bg-brand-green-light lg:block"></div>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <div className="relative mt-8 h-[500px] w-full max-w-3xl overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="PetPal App Interface"
                  className="object-cover"
                  fill
                />
              </div>
            </div> */}
          </div>
        </section>

        <section
          id="mission"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-purple-light px-3 py-1 text-sm text-brand-purple">
                  Nossa Missão
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transformando Adoção de Pets no Brasil
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça nossa missão e como estamos trabalhando para conectar
                  mais pets a lares amorosos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Nossa Visão</h3>
                  <p className="text-muted-foreground">
                    No Acha Patas, acreditamos que todo animal merece um lar
                    amoroso. Nossa plataforma foi criada para modernizar o
                    processo de adoção no Brasil, tornando-o mais acessível,
                    transparente e eficiente para adotantes e abrigos.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo-icon.png?height=100&width=100"
                    alt="Fundador do Acha Patas"
                    className="rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-medium">Equipe Acha Patas</p>
                    <p className="text-xs text-muted-foreground">Fundadores</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Nosso Impacto</h3>
                  <p className="text-muted-foreground">
                    Estamos comprometidos em reduzir o número de animais
                    abandonados no Brasil, apoiando abrigos locais e educando o
                    público sobre a importância da adoção responsável. Cada
                    adoção através do Acha Patas é uma vitória para nossa
                    missão.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      Meta de adoções para este ano
                    </span>
                    <span className="text-sm font-medium">10.000</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[5%] rounded-full bg-brand-purple"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Acabamos de começar nossa jornada!
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Parceiros e Apoiadores</h3>
                <p className="max-w-[600px] text-muted-foreground">
                  Trabalhamos com abrigos e organizações de proteção animal em
                  todo o Brasil.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 py-6">
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border bg-background p-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Logo Parceiro 1"
                    width={120}
                    height={60}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border bg-background p-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Logo Parceiro 2"
                    width={120}
                    height={60}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border bg-background p-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Logo Parceiro 3"
                    width={120}
                    height={60}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border bg-background p-4">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Logo Parceiro 4"
                    width={120}
                    height={60}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-brand-green-light"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Pronto Para Encontrar Seu Pet Perfeito?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Baixe o app Acha Patas hoje e comece sua jornada para
                    encontrar um companheiro amoroso. Disponível para iOS e
                    Android.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-slate-950 hover:bg-slate-800 text-white"
                  >
                    <Link href="#">
                      {/* <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Logo da Apple"
                        width={20}
                        height={20}
                        className="mr-2"
                      /> */}
                      App Store
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-slate-950 hover:bg-slate-800 text-white"
                  >
                    <Link href="#">
                      {/* <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="Logo do Google Play"
                        width={20}
                        height={20}
                        className="mr-2"
                      /> */}
                      Google Play
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative hidden lg:block lg:h-[500px] lg:w-[800px]">
                  <Image
                    src="/app-showcase-screens-1.png?height=1000&width=500"
                    alt="PetPal App Download Screen"
                    className="object-cover antialiased"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div>
            <Image
              src="/logo-horizontal.png"
              alt="Logo do aplicativo Acha Patas"
              className="object-contain h-12 w-auto"
              height={48}
              width={180}
              priority
            />
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Acha Patas. Todos os direitos
            reservados. Conectando pets a lares amorosos.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contate-nos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
