import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

// Example specialization options

export const StartupCard: React.FC<
{specializations: {value: string; label: string}[]
onSpecializationChange?: (value: string) => void;
onExperienceChange?: (value: string) => void;
onAdditionalInfoChange?: (value: string) => void;
onSpecificAreasChange?: (value: string) => void;
hideCard?: (value: boolean) => void;
isHidden?: boolean;

}> = ({specializations, onSpecializationChange, onExperienceChange, onAdditionalInfoChange, onSpecificAreasChange, hideCard, isHidden}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | undefined>();

    return (
        <Card className={"w-[40%] absolute " + (isHidden ? "hidden" : "")}>
            <CardHeader>
                <CardTitle>Interview Presets</CardTitle>
                <CardDescription>Lets challenge a skill and grow from there.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-8">
                        {/* Specialization Input */}
                        <div className="grid gap-2">
                            <Label>
                                Choose your software specialization. <span className="text-red-500">*</span>
                            </Label>
                            <Popover open={open} onOpenChange={setOpen} >
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className={cn(
                                            "w-full justify-between",
                                            !value && "text-muted-foreground"
                                        )}
                                    >
                                        {value
                                            ? specializations.find((specialization) => specialization.value === value)?.label
                                            : "Select specialization..."}
                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search specialization..." />
                                        <CommandList>
                                            <CommandEmpty>No specialization found.</CommandEmpty>
                                            <CommandGroup>
                                                {specializations.map((specialization) => (
                                                    <CommandItem
                                                        key={specialization.value}
                                                        onSelect={() => {
                                                            setValue(specialization.value);
                                                            onSpecializationChange ? onSpecializationChange(specialization.value) : null;
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        {specialization.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    {/* Years of Experience Input */}
                    <div className="grid gap-2 mt-4">
                        <Label>
                            Years of Experience in this field. <span className="text-red-500">*</span>
                        </Label>
                        <Select onValueChange={(val) => onExperienceChange ? onExperienceChange(val) : null}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select years of experience..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="1-2">1-2 years</SelectItem>
                                <SelectItem value="3-4">3-4 years</SelectItem>
                                <SelectItem value="5+">5+ years</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Area to Target*/}
                    <div className="grid gap-2 mt-4">
                        <Label>
                            Any specific area you want to target?<span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="E.g. System Design, Algorithms, Coding, Agile situations, etc." onChange={(e) => onSpecificAreasChange ? onSpecificAreasChange(e.target.value) : null} />
                    </div>
                    {/** Additional Information */}
                    <div className="grid gap-2 mt-4">
                        <Label>Any additional information or context?</Label>
                        <Textarea placeholder="E.g Company, role, specific technologies, etc." onChange={(e) => onAdditionalInfoChange ? onAdditionalInfoChange(e.target.value) : null} />
                    </div>

                </form>
                {/* Submit Button */}
                <Button className="mt-8 w-full" onClick={() => hideCard ? hideCard(true) : null}>Start Interview Simulation</Button>
            </CardContent>
        </Card>
    );
};