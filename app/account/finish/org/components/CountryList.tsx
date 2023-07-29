import { useEffect, useState } from 'react';

import { UseFormReturn } from 'react-hook-form';
import { CommandGroup, CommandItem } from '@/components/ui/command';
import { CountryResponse, getCountries } from '../../actions';
import { OrgTypeFSchema } from '../../schemas/orgFinishSchema';

type Props = {
  form: UseFormReturn<OrgTypeFSchema>;
};

export default function CountryList({ form }: Props) {
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
    <CommandGroup>
      {countries ? (
        countries.map((country) => {
          if (country.name) {
            return (
              <CommandItem
                value={country.name.common}
                key={country.flag}
                onSelect={(value) => {
                  form.setValue('country', value);
                }}
              >
                {country.name.common}
              </CommandItem>
            );
          }
          return (
            <CommandItem value="error">'Something went wrong'</CommandItem>
          );
        })
      ) : (
        <CommandItem value="error">{error}</CommandItem>
      )}
    </CommandGroup>
  );
}
