import Modal from '@/components/Modal'
import { Icon } from '@iconify/react'
import { Dropdown, Menu } from 'antd'
import React from 'react'
const Index: React.FC = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: (
            <label htmlFor="my-modal" className="cursor-pointer">
              <p>关于</p>
            </label>
          ),
          icon: <Icon className="text-black h-4 w-4" icon="flat-color-icons:about" />,
        },
        {
          key: '1',
          label: '用户信息',
          icon: <Icon className="text-black h-4 w-4" icon="ph:user" />,
        },
        {
          key: '2',
          label: '退出登录',
          icon: <Icon className="text-black h-4 w-4" icon="carbon:exit" />,
        },
      ]}
    />
  )
  return (
    <>
      <Modal></Modal>
      <div className="w-full h-full flex items-center justify-end">
        <div>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <div className="avatar flex items-center justify-center">
              <div className="w-12 rounded-xl text-4xl">
                <span>🥳</span>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  )
}
export default Index
