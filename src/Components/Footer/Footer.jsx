import "./Footer.scss";

const link = '#'

const Footer = () => {
    return (
        <section className="conteinerFooter">

            <article>
                <div>
                    <h4>Info</h4>
                    <p>
                        Carefully curated online design store.Featuring simple,
                        beautifule and thoughtfully designed products for
                        everyday user.
                    </p>
                </div>
                <p>@2021 The Design Shop</p>
            </article>
            <article>
                <div>
                    <h4>Get in touch</h4>
                    <p>
                        <strong>hello@thedsgnshop.com</strong>
                    </p>
                </div>
                <p>Los Angeles, CA</p>
            </article>
            <article>
                <div>
                    <h4>Newsletter</h4>
                    <p>
                        <strong>Sign up</strong> for the latest arrivals,
                        specila offers and weekly picks.
                    </p>
                </div>
                <p>Disclaimer Shop Weekly piscks</p>
            </article>
            <article>
                <div>
                    <h4>Followr uns</h4>
                    <p>
                        <a href={link}> <i class="lab la-instagram"></i></a>
                        <a href={link}><i class="lab la-pinterest"></i></a>
                        <a href={link}><i class="lab la-twitter"></i></a>
                        <a href={link}><i class="lab la-facebook"></i></a>
                    </p>
                </div>
                <p>Made/Curated by <strong>Ruby Bacanovic</strong> </p>

            </article>

        </section>
    );
};

export default Footer;
