import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
        <div className="py4 border-b-[1px]">
            <Container>
                <div className="flex justify-content item-center">
                    <Logo />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar
