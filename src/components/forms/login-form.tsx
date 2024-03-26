'use client'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	// FormMessage,
} from '@/components/ui/form'
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Link } from '@/navigation'

import Image from 'next/image'

import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
// import { getLocale } from 'next-intl/server'

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters.',
	}),
})

export default function LoginForm() {
	const t = useTranslations()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.

		console.log(values)
	}

	return (
		// <Card className="mx-auto w-96">
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<CardHeader className="p-0">
					<CardTitle>{t('pages.auth.login.title')}</CardTitle>
					<CardDescription>
						{t('pages.auth.login.description')} —
						<Button type="button" asChild className="p-2 font-medium text-blue-600" variant="link">
							<Link href="/signup">{t('pages.auth.login.descriptionLink')}</Link>
						</Button>
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4 px-0 py-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('pages.auth.login.email')}</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder={t('pages.auth.login.emailPlaceholder')}
										{...field}
									/>
								</FormControl>
								{/* <FormMessage>ㅤ</FormMessage> */}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('pages.auth.login.password')}</FormLabel>
								<FormControl>
									<Input
										placeholder={t('pages.auth.login.passwordPlaceholder', {
											charactersCount: 8,
										})}
										{...field}
									/>
								</FormControl>
								{/* <FormMessage>ㅤ</FormMessage> */}
							</FormItem>
						)}
					/>
				</CardContent>
				<CardFooter className="block p-0">
					<Button className="w-full" type="submit">
						{t('pages.auth.login.submitButton')}
					</Button>
					<div className="mt-4 grid grid-cols-2 gap-2">
						<div className="col-span-2 flex items-center justify-center">
							<Separator className="flex-1" />
							<div className="mx-2 text-center text-sm text-muted-foreground">{t('or')}</div>
							<Separator className="flex-1" />
						</div>

						<Button variant="outline" type="button" onClick={() => signIn('github')}>
							<Image
								src="/github.svg"
								alt="github"
								className="mr-2 block dark:hidden"
								width={20}
								height={20}
							/>
							<Image
								src="/github-white.svg"
								alt="github"
								className="mr-2 hidden dark:block"
								width={20}
								height={20}
							/>
							Github
						</Button>
						<Button variant="outline" type="button" onClick={() => signIn('google')}>
							<Image src="/google.svg" alt="google" className="mr-2" width={20} height={20} />
							Google
						</Button>
					</div>
				</CardFooter>
			</form>
		</Form>
		// </Card>
	)
}
