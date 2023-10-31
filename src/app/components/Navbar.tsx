'use client'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'

export default function HeaderComp() {
  const { data } = useSession()

  const dispatchNav = (key: string | number) => {
    switch (key) {
      case 'profile':
        break
      case 'settings':
        break
      case 'team_settings':
        break
      case 'analytics':
        break
      case 'system':
        break
      case 'help_and_feedback':
        break
      case 'logout':
        signOut()
        break
      default:
        break
    }
  }
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ERP</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="secondary" href="#">
            库存管理
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            报表
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            更多
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            onAction={dispatchNav}
            aria-label="Profile Actions"
            variant="flat"
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">当前用户</p>
              <p className="font-semibold">{data?.user?.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">库存管理</DropdownItem>
            <DropdownItem key="team_settings">统计</DropdownItem>
            <DropdownItem key="analytics">报表</DropdownItem>
            <DropdownItem key="system">系统</DropdownItem>
            <DropdownItem key="help_and_feedback">帮助</DropdownItem>
            <DropdownItem key="logout" color="danger">
              退出登录
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
