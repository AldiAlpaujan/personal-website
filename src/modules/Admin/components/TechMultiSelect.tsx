'use client';

import Image from 'next/image';
import { Badge } from '@/lib/shadcn/ui/badge';
import { Checkbox } from '@/lib/shadcn/ui/checkbox';
import { techIcons } from '@/lib/shadcn/variable';
import { TechType } from '@/types/tech-type';

export default function TechMultiSelect({
  value,
  onChange,
}: {
  value: TechType[];
  onChange: (value: TechType[]) => void;
}) {
  function toggle(name: string, checked: boolean) {
    const tech = name as TechType;
    onChange(checked ? [...value, tech] : value.filter((t) => t !== tech));
  }

  return (
    <div className="flex flex-col gap-3">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {value.map((tech) => (
            <Badge key={tech} variant="secondary">
              {techIcons.find((icon) => icon.name === tech)?.label ?? tech}
            </Badge>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto rounded-md border p-3">
        {techIcons.map((icon) => (
          <label
            key={icon.name}
            className="flex items-center gap-2 text-sm cursor-pointer select-none"
          >
            <Checkbox
              checked={value.includes(icon.name as TechType)}
              onCheckedChange={(checked) => toggle(icon.name, Boolean(checked))}
            />
            <Image src={icon.icon} alt={icon.label} width={16} height={16} className="size-4" />
            {icon.label}
          </label>
        ))}
      </div>
    </div>
  );
}
