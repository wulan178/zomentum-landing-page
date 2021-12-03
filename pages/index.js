import Navbar from '../components/organisms/navbar'
import Hero from '../components/organisms/hero'
import Footer from '../components/organisms/footer'
import Content from '../components/organisms/content'
import Items from '../components/organisms/items'
import Decore from '../components/atoms/Decore/decore'

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Decore className="heroImg1" img="/images/hero-left.svg" width={389.74} height={254.87} />
			<Decore className="heroImg2" img="/images/hero-right.svg" width={340.17} height={261} />

			{/* List. Sell. Grow */}
			<Items />
			<Decore className="listDecore1" img="/icons/triangleDecore.svg" width={107} height={87} />
			<Decore className="listDecore2" img="/icons/triangleDecore2.svg" width={120} height={98} />

			{/* Content 1 */}
			<Content type="no-link" />

			{/* Content 2 */}
			<Content type="left" img="/images/vendor.svg" width={380} height={255} title="Become the vendor everyone wants to buy from" desc="Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!" />

			{/* Content 3 */}
			<Content type="right" img="/images/autopilot.svg" width={256} height={259} title="It’s like having Your best Salesman on autopilot" desc="Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would." />

			{/* Content 4 */}
			<Content type="left" img="/images/performance.svg" width={283} height={240} title="Track your channel performance" desc="Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum." />

			{/* Content 5 */}
			<Content type="right" img="/images/playbook.svg" width={347} height={321} title="Get The best version of Your sales playbook" desc="Gather insights about top channel sellers and find out what pitch and collaterals ensure maximum profitability. Win happy customers with an optimized sales playbook." />

			<Footer />
		</div>
	)
}
