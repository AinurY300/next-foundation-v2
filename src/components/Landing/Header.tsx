import { Separator } from '@/components/ui/separator'
import { ToggleThemeButton } from '../toggle-theme-button'
import { ToggleLanguageButton } from '../toggle-language-button'
import LoginButton from '../login-button'

export function Header() {
	return (
		<header>
			<div className="container flex py-4">
				<div className="ml-auto flex gap-2">
					<LoginButton />
					<ToggleThemeButton />
					<ToggleLanguageButton />
				</div>
			</div>
			<Separator />
		</header>
	)
}
