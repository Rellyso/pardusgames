import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CategoryFlow, WorkoutCategory } from "@/constants/workouts-data";
import { FlowAccordion } from "./flow-accordion";
import { RoundsTimeline } from "./rounds-timeline";

type CategorySectionProps = {
  category: WorkoutCategory;
  categoryId: string;
  flows: CategoryFlow[];
};

export function CategorySection({
  category,
  categoryId,
  flows,
}: CategorySectionProps) {
  return (
    <section
      id={categoryId}
      className="scroll-mt-40 rounded-md border border-theme-border bg-[#131313] p-4 sm:p-6"
    >
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h2 className="font-heading text-4xl uppercase leading-none sm:text-5xl">
          {category.name}
        </h2>
        <Badge className="rounded-sm px-2 py-1 text-[11px] tracking-widest">
          Categoria
        </Badge>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue={category.divisions[0]?.name}
      >
        {category.divisions.map((division) => {
          const divisionFlow = flows.find(
            (flow) =>
              flow.categoryKey === category.key &&
              (flow.divisionName === division.name ||
                division.name.includes(flow.divisionName) ||
                flow.divisionName.includes(division.name)),
          );

          return (
            <AccordionItem
              key={`${category.key}-${division.name}`}
              value={division.name}
            >
              <AccordionTrigger className="py-5 text-left text-xl">
                <span className="inline-flex items-center gap-2">
                  <span>{division.name}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <RoundsTimeline rounds={division.rounds} />

                  {division.notes ? (
                    <p className="inline-flex rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-primary">
                      {division.notes}
                    </p>
                  ) : null}

                  {divisionFlow ? <FlowAccordion flow={divisionFlow} /> : null}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
