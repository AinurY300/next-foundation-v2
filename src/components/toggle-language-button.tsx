'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { locales } from '@/i18n'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import Image from 'next/image'

const dropdownMenuData = [
	{
		code: 'ru',
		title: 'Русский',
		icon: 'https://flagcdn.com/w20/ru.webp',
	},
	{
		code: 'en',
		title: 'English',
		icon: 'https://flagcdn.com/w20/gb.webp',
	},
]

export function ToggleLanguageButton() {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale() as (typeof locales)[number]

	const changeLanguage = (newLocale: typeof locale) => {
		router.replace(pathname, { locale: newLocale })
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Image
						width={20}
						height={20}
						src={
							dropdownMenuData.find(i => i.code === locale)?.icon ||
							`https://flagcdn.com/w20/${locale}.webp`
						}
						alt={locale}
					/>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuRadioGroup value={locale}>
					{locales.map(locale => {
						const itemData = dropdownMenuData.find(i => i.code === locale)
						return (
							<DropdownMenuRadioItem
								key={`lang-${locale}`}
								onClick={() => changeLanguage(locale)}
								value={locale}
							>
								<Image
									width={20}
									height={20}
									src={
										itemData?.icon || `https://flagcdn.com/w20/${locale}.webp`
									}
									alt={locale}
								/>
								<div className="ml-2">{itemData?.title || locale}</div>
							</DropdownMenuRadioItem>
						)
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
