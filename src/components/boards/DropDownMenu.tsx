import React,{ useState } from "react";
import styled from 'styled-components';

const DropMenu = styled.div`
  position:relative;

  &.open .dropMenu {
    opacity:1;
    z-index:1
  }
`
const DropMenuIcon = styled.svg`
  transform:rotate(0);
  transition: transform 0.5s;
  &.rotate {
    transform: rotate(180deg);
  }
`
const DropItemBox = styled.div`

  position: absolute;
  top: 49px;
  left: 0;
  z-index: -1;
  width: 100%;
  border-radius: 0.375rem;
  background-color: #F7F7FA;
  opacity:0;
  transition: opacity 0.3s ease;
`

interface DropdownProps {
  isOpen:boolean,
  onToggle : () => void;
  selectedLabel: string;
  children: React.ReactNode;
}

export default function Dropdown({ isOpen, onToggle, selectedLabel, children} : DropdownProps) {


  return (
    <DropMenu className= {`w-full md:inline-flex md:w-[120px] lg:w-[140px] gap-[20px] rounded-md ${isOpen? "open" : ""}`}>
      <button type="button" onClick={onToggle} className="w-full py-3 px-4 inline-flex justify-between items-center bg-[#F7F7FA] leading-[24px] text-[14px] rounded-md shadow-2xs">
        {selectedLabel}
        <DropMenuIcon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={isOpen ? 'rotate' : ''}
        >
          <path d="M7 10l5 5 5-5H7z" />
          </DropMenuIcon>
      </button>

      <DropItemBox role="menu" className="dropMenu">
        <div className={`${isOpen && 'open'}`}>
            {children}
        </div>
      </DropItemBox>
    </DropMenu>
  )
}