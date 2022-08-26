import React from 'react'

const Index: React.FC = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">好好学习!</h3>
          <p className="py-4">今天你学习了吗？</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              没有，自我感动而已
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
