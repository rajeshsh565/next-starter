const DrinksPageLayout = ({children}) => {
  return (
    <div className="max-w-xl">
        <div className="mockup-code">
            <pre data-prefix="$">
                <code>npm run dev</code>
            </pre>
      </div>
      {children}
    </div>
  )
}
export default DrinksPageLayout