import ButtonGroup from "./ButtonGroup"
import PackageFeaturesCard from "./PackageFeaturesCard"

export default function PackageSelector({ packages, selectedPackage, getSelected, mobile, slug }) {
  
  const buttons = packages.map(_package => {
    return {
      _id: _package._id,
      text: _package.name
    }
  })
  const defaultButton = buttons.filter(button => button._id === selectedPackage._id)[0]

  return (
    <div className={`${mobile && 'md:hidden my-8'} ${!mobile && 'hidden md:block xl:w-3/6'} overflow-hidden dark:bg-slate-800 bg-white border dark:border-slate-800 rounded-2xl lg:pb-8`}>
      <ButtonGroup getSelected={ (selected) => getSelected(selected) } defaultSelected={ defaultButton } buttons={ buttons } />
      <div className="px-6">
        <span className="mt-3 block text-sm text-gray-400 tracking-wider uppercase"> { selectedPackage.tag } </span>
        <h2 className="my-2 text-xl dark:text-slate-200 text-gray-600 font-heading font-medium">
          { selectedPackage.name }
        </h2>
        <p className="flex items-center mb-4">
          <span className="mr-2 text-sm text-green-500 font-medium">{ selectedPackage?.currency?.symbol }</span>
          <span className="text-3xl text-green-500 font-medium"> { selectedPackage.price } </span>
        </p>
        <PackageFeaturesCard features={ selectedPackage.features } order_count={ selectedPackage.order_count }/>
      </div>
    </div>
  )
}