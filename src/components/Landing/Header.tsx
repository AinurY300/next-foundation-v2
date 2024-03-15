import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ToggleThemeButton } from '../toggle-theme-button'

export default async function Header() {
	return (
		<header>
			<div className="container flex py-4">
				<div className="flex gap-2 ml-auto">
					<Button asChild>
						<Link href="/login">Войти</Link>
					</Button>
					<ToggleThemeButton />
				</div>
			</div>
			<Separator />
		</header>
	)
}
