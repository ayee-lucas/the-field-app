import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { UseFormReturn } from 'react-hook-form';
import { HiOutlineSelector } from 'react-icons/hi';
import { CountryResponse, getCountries } from '../../actions';
import { OrgTypeFSchema } from '../../schemas/orgFinishSchema';

type Props = {
  form: UseFormReturn<OrgTypeFSchema>;
};

export default function PopOverButton({ form }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<CountryResponse[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getCountries();

      if ('error' in data) {
        setError(data.message);
      } else {
        console.log(data[1].name);
        setCountries(data);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <FormField
      control={form.control}
      name="country"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel htmlFor="name">Country</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-full justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    <span className="first-letter:uppercase">
                      {field.value}
                    </span>
                  ) : (
                    'Select the org country'
                  )}
                  <HiOutlineSelector />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full min-w-[300px] p-0">
              <Command className="max-h-[200px]">
                <CommandInput placeholder="Search Country..." />
                <CommandEmpty>No Country Found.</CommandEmpty>
                {loading ? (
                  <CommandItem className="w-full flex justify-center items-center">
                    <span className="text-4xl font-bold animate-bounce delay-100">
                      .
                    </span>
                    <span className="text-4xl font-bold animate-bounce delay-150">
                      .
                    </span>
                    <span className="text-4xl font-bold animate-bounce delay-200">
                      .
                    </span>
                  </CommandItem>
                ) : (
                  <CommandGroup>
                    {countries ? (
                      countries.map((country) => {
                        if (country.name) {
                          return (
                            <CommandItem
                              value={`${country.name.common}`}
                              key={country.flag}
                              onSelect={(value) => {
                                console.log(value);
                                form.setValue('country', value);
                              }}
                            >
                              {country.flag} {country.name.common}
                            </CommandItem>
                          );
                        }
                        return (
                          <CommandItem value="error">
                            'Something went wrong'
                          </CommandItem>
                        );
                      })
                    ) : (
                      <CommandItem value="error">{error}</CommandItem>
                    )}
                  </CommandGroup>
                )}
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}
