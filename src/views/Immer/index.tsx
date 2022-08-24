import { Icon } from '@iconify/react'
import React from 'react'
import { useImmer } from 'use-immer'

interface LearnItem {
  learnName: string
  done: boolean
  title: string
}

const Index: React.FC = () => {
  const [learnList, setLearnList] = useImmer<LearnItem[]>([
    { learnName: 'React', done: false, title: 'learn React' },
    { learnName: 'Vue', done: false, title: 'learn Vue' },
    { learnName: 'Immer', done: false, title: 'learn Immer' },
  ])
  const [Item, setItem] = useImmer<LearnItem>({
    learnName: '',
    done: false,
    title: '',
  })

  const handleChangeLearnName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem((draft) => {
      draft.learnName = e.target.value
      draft.title = `learn ${e.target.value}`
    })
  }

  const handleLearn = (learnItem: LearnItem): void => {
    setLearnList((draft) => {
      const todo = draft.find((i) => i.learnName === learnItem.learnName)
      if (todo !== undefined) {
        todo.done = !todo.done
      }
    })
  }

  const handleAdd = (): void => {
    setLearnList((draft) => {
      draft.push(Item)
    })
    setItem((draft) => {
      draft.learnName = ''
      draft.title = ''
    })
  }
  return (
    <div className="w-64">
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs focus:outline-0 mr-4"
          value={Item.learnName}
          onChange={handleChangeLearnName}
        />
        <button className="btn btn-accent btn-sm inline-block" onClick={handleAdd}>
          <Icon icon="material-symbols:add"></Icon>
        </button>
      </div>
      {learnList.map((i) => (
        <div key={i.learnName} className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">{i.title}</span>
            <input
              type="checkbox"
              readOnly
              checked={i.done}
              className="checkbox checkbox-accent  checkbox-sm"
              onChange={() => handleLearn(i)}
            />
          </label>
        </div>
      ))}
    </div>
  )
}

export default Index
