import {
  MenuItemsType,
  DropdownMenuItemType,
  HomeIcon,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Dashboard'),
    href: '',
    icon: HomeIcon,
    fillIcon: HomeIcon,
    items: [
      {
        label: t('Home'),
        href: 'https://sectorprotocol.io/dapp',

      },
    ],
  },
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',

      },
    ],
  },
  {
    label: t('Earn'),
    href: '',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Stake'),
        href: '',
      },
      {
        label: t('Farms'),
        href: '',
      },
    ],
  },
]

export default config
