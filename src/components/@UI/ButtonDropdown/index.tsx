import React, { useState, useRef, useEffect, forwardRef } from 'react'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSelected,
  DropdownWrapper,
  DropdownMenuItems,
  DropdownMultiSelected,
  DropdownMenuArrow,
  DropdownMultiSelectedCount,
} from './Styled'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import Icon from '../Icon'

export interface ButtonDropdownInterface {
  options: Array<string>
  name: string
  isMulti: boolean
  value: string | Array<string>
  onChange: Function
  disabled: boolean
}

const ButtonDropdown = (
  {
    options,
    isMulti = false,
    name,
    value,
    disabled,
    onChange,
    ...props
  }: ButtonDropdownInterface,
  ref: React.RefObject<HTMLDivElement>
) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div {...{ ref, ...props }}>
      <DropdownWrapper ref={dropdownRef}>
        <Dropdown
          disabled={disabled}
          open={open}
          isMulti={isMulti}
          onClick={() => !disabled && setOpen(!open)}
        >
          <span> {isMulti ? 'Filter By' : 'Category:'} </span>
          {isMulti ? (
            <DropdownMultiSelected disabled={disabled}>
              <Icon icon="filter" />
              {value.length ? (
                <DropdownMultiSelectedCount>
                  {value.length}
                </DropdownMultiSelectedCount>
              ) : null}
            </DropdownMultiSelected>
          ) : (
            <DropdownSelected disabled={disabled} isSelected={!!value.length}>
              {disabled ? '--' : value.length ? value : 'Select'}
            </DropdownSelected>
          )}
          <DropdownMenuArrow open={open} disabled={disabled}>
            <Icon icon="arrowDropdown" />
          </DropdownMenuArrow>
        </Dropdown>
        {open && (
          <DropdownMenu>
            <DropdownMenuItems>
              {options.map((option, index) => (
                <DropdownMenuItem
                  key={index}
                  isMulti={isMulti}
                  unSelected={option !== value && !!value.length}
                  onClick={() => onChange(option)}
                >
                  {isMulti ? (
                    <Checkbox readOnly checked={value.includes(option)} />
                  ) : (
                    <Radio readOnly name={name} checked={option === value} />
                  )}
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuItems>
          </DropdownMenu>
        )}
      </DropdownWrapper>
    </div>
  )
}

export default forwardRef(ButtonDropdown)