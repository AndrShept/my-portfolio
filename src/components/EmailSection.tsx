'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from './ui/use-toast';
import { motion, useInView } from 'framer-motion';

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(4).max(30),
  message: z.string().min(4),
});

export const EmailSection = () => {
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
      id='Contact'
      ref={ref}
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 h-screen'
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
            <h5 className='text-xl font-bold text-primary my-2'>
              Let&apos;s Connect
            </h5>
            <p className='text-muted-foreground mb-4 max-md'>
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className=' flex gap-2'>
              <Link
                target='_blank'
                className='h-12 w-12 relative '
                href={'https://github.com/AndrShept'}
              >
                <Image
                  className='bg-black rounded-full'
                  fill
                  src={'/github-icon.svg'}
                  alt='img'
                />
              </Link>
              <Link
                target='_blank'
                className='h-12 w-12 relative'
                href={'https://github.com/AndrShept'}
              >
                <Image
                  className='bg-black rounded-full'
                  fill
                  src={'/linkedin-icon.svg'}
                  alt='img'
                />
              </Link>
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
            className='flex flex-col max-w-2xl  '
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className='bg-secondary/40'
                          placeholder='example@mail.com'
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
                  name='subject'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className='bg-secondary/40'
                          placeholder=''
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          className='bg-secondary/40 resize-none'
                          placeholder=''
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} className='w-full' type='submit'>
                  {isLoading ? 'sending...' : ' Send Message'}
                  {isLoading && <Loader2 className='animate-spin ml-2' />}
                </Button>
              </form>
            </Form>
          </motion.div>
        </>
      )}
    </section>
  );
};
