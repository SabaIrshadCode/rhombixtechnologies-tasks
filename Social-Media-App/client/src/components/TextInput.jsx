import React from 'react'

const TextInput = React.forwardRef((
    {
        type, placeholder, styles, label, labelStyles, register, name, error,
    },
    ref
) => {
  return (
    <div className='w-ful flex flex-col mt-2'>
      { label && (<p className='text-ascent-2 text-sm mb-2 `${labelStyles}` ' >{label}</p>)}

      <div>
        <input type={type}
        name= {name}
        placeholder={placeholder}
        ref={ref}
        className={`bg-secondary rounded border border-[#66666690]
            outline-none text-ascent-1 text-sm px-4 py-3 placeholder:text-[#666]  ${styles}
            `}
            {...register}
            aria-invalid={error ? "true": "false"}
        />
      </div>
      {error && (
        <span className='text-xs text-[#f64949fe] mt-0.5 '>
            {error}
        </span>
      )}
    </div>
  )
});

export default TextInput
