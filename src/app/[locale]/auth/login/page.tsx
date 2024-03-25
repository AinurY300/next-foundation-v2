'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ToggleLanguageButton } from '@/components/toggle-language-button'
import { ToggleThemeButton } from '@/components/toggle-theme-button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ArrowLeftIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useRouter } from '@/navigation'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters.',
	}),
})

interface LoginPageProps {
	params: { locale: string }
}

export default function LoginPage({ params: { locale } }: LoginPageProps) {
	const router = useRouter()
	const t = useTranslations()

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<div className="container flex h-dvh flex-col ">
			<header className="flex gap-2 py-4">
				<Button variant={'outline'} onClick={() => router.back()}>
					<ArrowLeftIcon className="mr-2 h-4 w-4" />
					{t('back')}
				</Button>
				<ToggleThemeButton className="ml-auto" />
				<ToggleLanguageButton />
			</header>
			<main className="grid flex-1 items-center">
				<Card className="mx-auto w-96">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<CardHeader>
								<CardTitle>{t('pages.auth.login.title')}</CardTitle>
								<CardDescription>
									{t('pages.auth.login.description')}
								</CardDescription>
							</CardHeader>
							<CardContent>
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
											<FormMessage>ㅤ</FormMessage>
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
													placeholder={t(
														'pages.auth.login.passwordPlaceholder',
														{ charactersCount: 8 },
													)}
													{...field}
												/>
											</FormControl>
											<FormMessage>ㅤ</FormMessage>
										</FormItem>
									)}
								/>
							</CardContent>
							<CardFooter className="block">
								<Button className="w-full" type="submit">
									{t('pages.auth.login.submitButton')}
								</Button>
								<div className="mt-4 grid grid-cols-3 gap-2">
									<Button
										variant="outline"
										type="button"
										onClick={() => signIn('github')}
									>
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
									<Button
										variant="outline"
										type="button"
										onClick={() => signIn('github')}
									>
										<Image
											src="/google.svg"
											alt="google"
											className="mr-2"
											width={20}
											height={20}
										/>
										Google
									</Button>
									<Button variant="outline" type="button">
										<Image
											src={locale === 'ru' ? '/yandex.svg' : '/yandex-en.svg'}
											alt="yandex"
											className="mr-2"
											width={20}
											height={20}
										/>
										{t('yandex')}
									</Button>
								</div>
							</CardFooter>
						</form>
					</Form>
				</Card>
			</main>
		</div>
	)
}
