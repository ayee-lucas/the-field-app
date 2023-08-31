/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Textarea } from '@/components/ui/textarea';

import { Progress } from '@/components/ui/progress';

import { Gauge } from 'lucide-react';
import { GiBasketballBall, GiSoccerBall } from 'react-icons/gi';
import { FaFootballBall, FaTableTennis } from 'react-icons/fa';
import { CgAdidas } from 'react-icons/cg';
import {
  SiChevrolet,
  SiCocacola,
  SiEmirates,
  SiNike,
  SiPepsi,
  SiSamsung,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { AiTwotoneStar } from 'react-icons/ai';
import { MdSportsBaseball } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { getGoSession } from '@/app/tools/getGoServerSession';
import { useRouter } from 'next/navigation';
import {
  finishAthl,
  finishUser,
} from '@/app/server-actions/finish-profile/actions';
import PopOverButtonAth from './PopoverButtonAth';
import {
  AthlFinishResolver,
  AthlFinishTypeFSchema,
} from '../../schemas/athlFTypeSchema';

export default function AthlFinishForm() {
  const router = useRouter();
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<AthlFinishTypeFSchema>({
    resolver: AthlFinishResolver,
    defaultValues: {
      name: '',
      bio: '',
      nationality: '',
      gender: '',
      sport: '',
      current_team: '',
      sponsors: [],
      height: '',
      weight: '',
      achievements: '',
      contact: '',
    },
  });

  const onSubmit = async (values: AthlFinishTypeFSchema) => {
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

    const dataAthl = {
      nationality: values.nationality,
      gender: values.gender,
      sport: values.sport,
      sponsors: values.sponsors,
      current_team: values.current_team,
      height: Number(values.height),
      weight: Number(values.weight),
      achievements: values.achievements,
      contact: values.contact,
    };

    setTimeout(() => {
      setProgress(60);
    }, 400);

    const resAthl = await finishAthl(dataAthl, userId);

    if ('error' in resAthl) {
      return setError(resAthl.message);
    }

    setProgress(80);

    localStorage.setItem('finished', 'trues');

    return router.push('/account/picture/');
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
                  <Input placeholder="What's your name?" {...field} />
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
                  <Input placeholder="Add a bio" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="contact">Contact</FormLabel>
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
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>What's your gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <PopOverButtonAth form={form} />
          <FormField
            control={form.control}
            name="current_team"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="city">Current Team</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your current team" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
                <FormDescription>
                  If you are not in a team, leave it blank
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormLabel htmlFor="website">What's your height?</FormLabel>

                <FormControl>
                  <Input
                    type="number"
                    placeholder='Enter your height here in "cm" '
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
                <FormDescription>Enter your height in cm</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormLabel htmlFor="website">What's your weight?</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder='Enter your weight here in "lbs"'
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
                <FormDescription>Enter your height in cm</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sport</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
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
                    <SelectTrigger value="">
                      <SelectValue placeholder="Select a sponsor" />
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
                  If you don't see your sponsor or don't have one, leave it
                  blank. You can add more later.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="achievements"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="achievements">Achievements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us your achievements"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
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
