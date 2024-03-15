'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useParams } from 'next/navigation'
import { useRouter, usePathname } from '@/navigation'
import { useLocale } from 'next-intl'

const dropdownMenuData = [
	{
		id: 0,
		code: 'ru',
		title: 'Русский',
		icon: 'https://flagcdn.com/w20/ru.webp',
	},
	{
		id: 1,
		code: 'en',
		title: 'English',
		icon: 'https://flagcdn.com/w20/gb.webp',
	},
]

export function ToggleLanguageButton() {
	const router = useRouter()
	const params = useParams()
	const pathname = usePathname()
	const locale = useLocale()

	const changingLanguage = function (newLocale: string) {
		router.replace(
			// @ts-expect-error --TypeScript проверит, что только известные `params`
			// используются в сочетании с заданным «путем». Поскольку эти двое будут
			// всегда соответствует текущему маршруту, мы можем пропустить проверки во время выполнения.
			{ pathname, params },
			{ locale: newLocale }
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Image
						width={20}
						height={20}
						src={dropdownMenuData.find(i => i.code === locale)!.icon}
						alt={locale}
					/>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{dropdownMenuData.map(locale => (
					<DropdownMenuItem
						key={locale.id}
						className="flex gap-2"
						onClick={() => changingLanguage(locale.code)}
					>
						<Image width={20} height={20} src={locale.icon} alt={locale.code} />
						<div>{locale.title}</div>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
