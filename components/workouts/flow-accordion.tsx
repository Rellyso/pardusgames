import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CategoryFlow } from "@/constants/workouts-data";

type FlowAccordionProps = {
  flow: CategoryFlow;
};

export function FlowAccordion({ flow }: FlowAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-sm border border-theme-border px-4"
    >
      <AccordionItem
        value={`${flow.categoryKey}-${flow.divisionName}`}
        className="border-b-0"
      >
        <AccordionTrigger className="text-base sm:text-lg">
          {flow.heading}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 border-t border-theme-border pt-4">
            {flow.blocks.map((block, index) => (
              <div key={`${flow.heading}-${block}`}>
                <p className="text-xs uppercase tracking-[0.14em] text-theme-primary">
                  Bloco {index + 1}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                  {block}
                </p>
              </div>
            ))}

            {flow.rules ? (
              <div className="rounded-sm border border-theme-border bg-card px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-theme-primary">
                  Regras de sincronização
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                  {flow.rules}
                </p>
              </div>
            ) : null}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
