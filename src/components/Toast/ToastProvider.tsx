import React, { createContext, useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import ReactDOM from 'react-dom'

import cls from '@helpers/class'

import '@components/Toast/Toast.scss'
import Toast from '@components/Toast/Toast'
import { IToastCtx, IToastProvider } from '@components/Toast/Type'

export const ToastContext = createContext<IToastCtx>(null)

export const ToastProvider = ({
  className,
  style,
  children,
}: IToastProvider) => {
  const [toastList, setToastList] = useState([])
  const [canUseDOM, setCanUseDOM] = useState(false)

  const addToast = (toast) => {
    if (_.isNil(toast.toastId)) toast.toastId = _.uniqueId('toast')
    setToastList((prevToastList) => [...prevToastList, toast])
  }

  const removeToast = (id) =>
    setToastList((prevToastList) =>
      prevToastList.filter((toast) => id !== toast.toastId),
    )

  const removeAllToast = () => setToastList([])

  useEffect(() => {
    setCanUseDOM(true)
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast, removeAllToast }}>
      {canUseDOM &&
        ReactDOM.createPortal(
          <div className={clsx(cls('toastProvider'), className)} style={style}>
            {!_.isEmpty(toastList) &&
              toastList.map(
                (
                  {
                    className,
                    toastId,
                    callbackMessage,
                    duration,
                    message,
                    type,
                    style,
                    callback,
                  },
                  idx,
                ) => (
                  <Toast
                    key={`Toast__${idx}`}
                    className={className}
                    toastId={toastId}
                    callbackMessage={callbackMessage}
                    duration={duration}
                    message={message}
                    type={type}
                    style={style}
                    callback={callback}
                  />
                ),
              )}
          </div>,
          document.body,
        )}
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const { addToast, removeToast, removeAllToast } = useContext(ToastContext)
  return {
    add: addToast,
    remove: removeToast,
    removeAll: removeAllToast,
  }
}
