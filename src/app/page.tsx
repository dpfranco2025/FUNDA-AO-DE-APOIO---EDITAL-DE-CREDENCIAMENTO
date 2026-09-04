import Link from "next/link";
import {
  FileText,
  Paperclip,
  ClipboardList,
  CalendarClock,
  HelpCircle,
  Send,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Download,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ActionCard } from "@/components/ui/ActionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATUS_ATUAL, CATALOGO_STATUS_EDITAL } from "@/content/site-config";

export default function HomePage() {
  const statusInfo = CATALOGO_STATUS_EDITAL[STATUS_ATUAL];

  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[radial-gradient(circle_at_82%_18%,rgba(80,198,218,.18),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(23,105,224,.12),transparent_28%),linear-gradient(120deg,#eef5ff_0%,#f9fbfe_52%,#fff_100%)]">
        <div className="pointer-events-none absolute -right-20 -top-64 h-[520px] w-[520px] rounded-full border border-blue-200/50" />
        <Container className="relative grid min-h-[520px] items-center gap-12 py-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:py-16">
          <div className="portal-reveal">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.12em] text-blue-600 before:h-0.5 before:w-7 before:bg-gold-500">Chamamento público permanente</p>
            <h1 className="mt-5 max-w-3xl text-[2.7rem] font-black leading-[1.02] tracking-[-.055em] text-navy-950 sm:text-6xl lg:text-[4.15rem]">Sua fundação pode apoiar os projetos de <span className="text-blue-600">inovação da ICT-AGU</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">Conheça os requisitos, prepare a documentação e solicite a habilitação institucional para atuar em programas e projetos da Advocacia-Geral da União.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button href="/edital" variant="primary">Consultar texto aprovado <ArrowRight className="h-4 w-4" /></Button><Button href="/documentos" variant="secondary"><Download className="h-4 w-4" /> Baixar documentos</Button><Button href="/como-participar" variant="ghost">Entenda como participar</Button></div>
          </div>
          <aside className="portal-reveal relative rounded-[1.75rem] border border-white/80 bg-white/90 p-7 shadow-[0_20px_60px_rgba(10,31,56,.12)] backdrop-blur sm:p-8" aria-label="Situação do edital">
            <div className="flex items-start justify-between gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><CheckCircle2 className="h-8 w-8" /></span><span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-extrabold text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Aprovação concluída</span></div>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-950">Edital aprovado pelo CG-AGU</h2><p className="mt-2 text-sm leading-relaxed text-neutral-600">{statusInfo.descricao}</p>
            <div className="mt-6 grid grid-cols-3 gap-2"><span className="h-1.5 rounded-full bg-blue-600"/><span className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"/><span className="h-1.5 rounded-full bg-neutral-200"/></div><div className="mt-2 flex justify-between text-[10px] font-bold text-neutral-500"><span>Elaboração</span><span>Aprovação</span><span>Publicação</span></div>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900"><strong>Próxima etapa:</strong> publicação oficial e divulgação dos dados definitivos do procedimento.</div>
            <div className="mt-4 grid gap-2 text-xs font-semibold text-neutral-600 sm:grid-cols-2"><span className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">✓ Chamamento permanente</span><span className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">✓ Solicitação a qualquer tempo</span></div>
          </aside>
        </Container>
      </section>

      <Container className="flex flex-col gap-20 py-16 sm:py-20">
        {/* Ações rápidas */}
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="Comece por aqui" title="O que você precisa fazer?" description="Acesse rapidamente os conteúdos essenciais para preparar o pedido de habilitação." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ActionCard icon={FileText} title="Consultar o edital" description="Conheça o texto aprovado, as condições e os efeitos da habilitação." href="/edital" accent="blue" />
            <ActionCard icon={Paperclip} title="Baixar formulários" description="Encontre requerimentos, declarações e modelos oficiais em um só lugar." href="/documentos" accent="violet" />
            <ActionCard icon={ClipboardList} title="Conferir documentos" description="Use o checklist para organizar os itens obrigatórios e condicionais." href="/checklist" accent="green" />
            <ActionCard icon={CalendarClock} title="Consultar cronograma" description="Acompanhe ciclos de análise, prazos e atualizações do procedimento." href="/cronograma" accent="amber" />
            <ActionCard icon={HelpCircle} title="Tirar dúvidas" description="Consulte respostas rápidas sobre requisitos, documentos e etapas." href="/faq" accent="cyan" />
            <ActionCard icon={Send} title="Canal oficial de protocolo" description="Saiba onde e como apresentar o requerimento de habilitação." href="/atendimento" accent="rose" />
          </div>
        </div>

        {/* Jornada resumida */}
        <div className="flex flex-col gap-7 rounded-[1.75rem] bg-neutral-50 p-6 sm:p-9">
          <SectionHeading
            eyebrow="Sua jornada"
            title="Quatro fases até a habilitação"
            description="As 11 etapas do edital foram organizadas em quatro macrofases para facilitar a compreensão."
            action={
              <Link href="/como-participar" className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
                Ver guia completo <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[
            ["01","Preparação",["Leitura do edital","Verificação de requisitos","Organização documental"]],
            ["02","Solicitação",["Preenchimento dos formulários","Apresentação do requerimento"]],
            ["03","Análise",["Conferência pela comissão","Eventual diligência","Resultado preliminar"]],
            ["04","Decisão",["Recurso, quando cabível","Deliberação do CG-AGU","Cadastro e vigência"]],
          ].map(([numero,titulo,itens])=><article key={numero as string} className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><span className="text-xs font-black tracking-wider text-blue-600">FASE {numero as string}</span><h3 className="mt-3 text-lg font-extrabold text-navy-950">{titulo as string}</h3><ul className="mt-4 space-y-2.5">{(itens as string[]).map(item=><li key={item} className="flex gap-2 text-sm text-neutral-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}</ul></article>)}</div>
        </div>
      </Container>
      <section className="pb-20"><Container><div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-950 to-navy-800 p-8 text-white shadow-xl sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10"><Sparkles className="absolute -right-6 -top-6 h-40 w-40 text-white/[.04]" /><div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-cyan-300">Atendimento orientado</p><h2 className="mt-2 text-3xl font-extrabold tracking-tight">Não sabe por onde começar?</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-300">Consulte as perguntas frequentes ou utilize o guia da jornada para identificar os documentos e providências aplicáveis à sua fundação.</p></div><Button href="/faq" variant="secondary" className="relative mt-6 shrink-0 sm:mt-0">Acessar central de dúvidas <ArrowRight className="h-4 w-4" /></Button></div></Container></section>
    </>
  );
}
