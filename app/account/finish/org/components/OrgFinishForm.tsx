/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

import { Gauge } from 'lucide-react';
import { GiSoccerBall, GiBasketballBall } from 'react-icons/gi';
import { FaTableTennis, FaFootballBall } from 'react-icons/fa';
import { CgAdidas } from 'react-icons/cg';
import {
  SiNike,
  SiCocacola,
  SiPepsi,
  SiEmirates,
  SiChevrolet,
  SiSamsung,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { AiTwotoneStar } from 'react-icons/ai';
import { MdSportsBaseball } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { getGoSession } from '@/app/tools/getGoServerSession';
import { useRouter } from 'next/navigation';
import { OrgTypeFSchema, OrgFormResolver } from '../../schemas/orgFinishSchema';
import PopOverButton from './PopOverButton';
import { finishOrg, finishUser } from '../../actions';

export default function OrgFinishForm() {
  const router = useRouter();
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<OrgTypeFSchema>({
    resolver: OrgFormResolver,
    defaultValues: {
      name: '',
      bio: '',
      email: '',
      country: '',
      city: '',
      website: '',
      sport: [],
      sponsors: [],
    },
  });

  const onSubmit = async (values: OrgTypeFSchema) => {
    setLoading(true);

    const session = await getGoSession();

    if (!session?.user?.sub) {
      return setError('Error getting session user');
    }

    const userId = session?.user?.sub;

    setTimeout(() => {
      setProgress(25);
    }, 700);

    const dataFinishUser = {
      name: values.name,
      bio: values.bio,
    };

    setTimeout(() => {
      setProgress(43);
    }, 800);

    const resUser = await finishUser(userId, dataFinishUser);

    if (resUser.error) return setError(resUser.message);

    setTimeout(() => {
      setProgress(50);
    }, 400);

    const dataOrg = {
      country: values.country,
      email: values.email,
      city: values.city,
      website: values.website,
      sport: values.sport,
      sponsor: values.sponsors,
    };

    setTimeout(() => {
      setProgress(60);
    }, 400);

    const resOrg = await finishOrg(dataOrg, userId);

    if ('error' in resOrg) {
      return setError(resOrg.message);
    }

    setProgress(100);

    localStorage.setItem('finished', 'true');

    return router.replace('/account/success/org/');
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          {/** Name  */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of the organizaton"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="bio">Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a description about your org"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter an email" {...field} />
                </FormControl>
                <FormDescription>
                  This email will be public and displayed in your profile as
                  contact information
                </FormDescription>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <PopOverButton form={form} />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="city">City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the city your org is working"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="website">Website</FormLabel>
                <FormControl>
                  <Input
                    placeholder="You can add your website here"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Main sport</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange([value])}
                  defaultValue={field.value ? field.value[0] : undefined}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sport" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-50">
                    <SelectItem value="basketball">
                      <div className="flex items-center gap-2">
                        <span>Basketball</span> <GiBasketballBall />
                      </div>
                    </SelectItem>
                    <SelectItem value="soccer">
                      <div className="flex items-center gap-2">
                        <span>Soccer</span> <GiSoccerBall />
                      </div>
                    </SelectItem>
                    <SelectItem value="tennis">
                      <div className="flex items-center gap-2">
                        <span>Tennis</span> <FaTableTennis />
                      </div>
                    </SelectItem>
                    <SelectItem value="baseball">
                      <div className="flex items-center gap-2">
                        <span>Baseball</span> <MdSportsBaseball />
                      </div>
                    </SelectItem>
                    <SelectItem value="football">
                      <div className="flex items-center gap-2">
                        <span>Football</span> <FaFootballBall />
                      </div>
                    </SelectItem>
                    <SelectItem value="motorsports">
                      <div className="flex items-center gap-2">
                        <span>Motor Sports</span> <Gauge />
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can add more than 1 sport later
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sponsors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Main sponsor</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange([value])}
                  defaultValue={field.value ? field.value[0] : undefined}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Sponsor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-50">
                    <SelectItem value="heineken">
                      <div className="flex items-center font-montserrat gap-1">
                        <span>HEINEKEN</span>
                        <AiTwotoneStar />
                      </div>
                    </SelectItem>
                    <SelectItem value="nike">
                      <div className="flex items-center gap-2">
                        <span>Nike</span> <SiNike />
                      </div>
                    </SelectItem>
                    <SelectItem value="adidas">
                      <div className="flex items-center gap-2">
                        <span>Adidas</span> <CgAdidas />
                      </div>
                    </SelectItem>
                    <SelectItem value="coca-cola">
                      <div className="flex items-center gap-2">
                        <span>Coca-Cola</span>
                        <SiCocacola size={30} />
                      </div>
                    </SelectItem>
                    <SelectItem value="pepsi-co">
                      <div className="flex items-center gap-2">
                        <span>Pepsi</span> <SiPepsi />
                      </div>
                    </SelectItem>
                    <SelectItem value="emirates">
                      <div className="flex items-center gap-2">
                        <span>Emirates</span> <SiEmirates />
                      </div>
                    </SelectItem>
                    <SelectItem value="red-bull">
                      <div className="flex items-center gap-2">
                        <span>Red bull</span> <Gauge />
                      </div>
                    </SelectItem>
                    <SelectItem value="samsung">
                      <div className="flex items-center gap-2">
                        <span>Samsung</span> <SiSamsung size={40} />
                      </div>
                    </SelectItem>
                    <SelectItem value="chevrolet">
                      <div className="flex items-center gap-2">
                        <span>Chevrolet</span> <SiChevrolet />
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  If you don't see your sponsor, leave it blank you can add more
                  later
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Dialog>
            {!confirmation && (
              <DialogTrigger className="bg-white w-full py-2 rounded-lg text-black">
                Finish
              </DialogTrigger>
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  Make sure all the information you provided it's correct before
                  submitting your application
                </DialogDescription>
                <DialogTrigger
                  className="bg-white w-full py-2 rounded-lg text-black"
                  onClick={() => setConfirmation(true)}
                >
                  Finish
                </DialogTrigger>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {confirmation && (
            <Button type="submit" variant="secondary" className="w-full">
              Submit
            </Button>
          )}
        </form>
      </Form>
      {loading && (
        <Dialog open>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submitting</DialogTitle>
              <DialogDescription className="flex flex-col items-center justify-center">
                We're submitting your application
                {error && <span className="text-xs text-red-500">{error}</span>}
              </DialogDescription>
            </DialogHeader>
            <Progress value={progress} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
