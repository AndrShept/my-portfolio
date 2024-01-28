'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'framer-motion';
import { Check, Copy, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(4).max(30),
  message: z.string().min(4),
});

export const EmailSection = () => {
  const telNumber = '0504306203';
  const [isCopy, setIsCopy] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });
  const { toast } = useToast();
  const onCopy = () => {
    if (!telNumber) {
      return;
    }
    navigator.clipboard.writeText(telNumber);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 5000);
    toast({
      description: ' Message copied to clipboard',
    });
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (result.id) {
        toast({
          title: 'SUCCESS',
          description: 'Email success sending !!!',
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast({ description: 'Something went wrong', variant: 'destructive' });
    }
  };
  const isLoading = form.formState.isSubmitting;
  return (
    <section
      id="Contact"
      ref={ref}
      className="my-32 grid h-[710px] gap-8 md:grid-cols-2 "
    >
      {isInView && (
        <>
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <h5 className="my-2 text-xl font-bold text-primary">
              Let&apos;s Connect
            </h5>
            <p className="max-md mb-4 text-muted-foreground">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <div className="mt-10 flex flex-col gap-2 rounded-xl border border-border bg-muted/70 p-4">
              <div className=" flex gap-2">
                <Link
                  target="_blank"
                  className="relative h-12 w-12 "
                  href={'https://github.com/AndrShept'}
                >
                  <Image
                    className="rounded-full bg-black"
                    fill
                    src={'/github-icon.svg'}
                    alt="img"
                  />
                </Link>
                <Link
                  target="_blank"
                  className="relative h-12 w-12"
                  href={'https://github.com/AndrShept'}
                >
                  <Image
                    className="rounded-full bg-black"
                    fill
                    src={'/linkedin-icon.svg'}
                    alt="img"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-2 ">
                <p>Tel:</p>
                <p className="text-muted-foreground"> 050 430 62 03</p>
                <Button onClick={onCopy} variant={'ghost'} size={'smallIcon'}>
                  {isCopy ? (
                    <Check className="text-green-500 " />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="flex max-w-2xl flex-col  "
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-muted/70"
                          placeholder="example@mail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Enter your email</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-muted/70"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          className="resize-none bg-muted/70"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} className="w-full" type="submit">
                  {isLoading ? 'sending...' : ' Send Message'}
                  {isLoading && <Loader2 className="ml-2 animate-spin" />}
                </Button>
              </form>
            </Form>
          </motion.div>
        </>
      )}
    </section>
  );
};
