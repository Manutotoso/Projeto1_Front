<template>
        <footer id="footer-part">
        <div class="footer-top pt-40 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-about mt-40">
                            <p>© [Emanuel Cafofo:2085323] [Voluntario Madeira]. Todos os direitos reservados.</p>
                            <ul class="mt-20">
                                <li><a href="https://www.facebook.com"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div> <!-- footer about -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-link mt-40">
                            <div class="footer-title pb-25">
                                <h6>Links</h6>
                            </div>
                            <ul>
                                <li><router-link to="/about"><i class="fa fa-angle-right"></i>Sobre Nos</router-link></li>
                                <li><router-link to="/news"><i class="fa fa-angle-right"></i>Novidades</router-link></li>
                                <li><router-link to="/register"><i class="fa fa-angle-right"></i>Regista-te</router-link></li>
                                <li><router-link to="/sigin"><i class="fa fa-angle-right"></i>Sign In</router-link></li>
                            </ul>
                        </div> <!-- footer link -->
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-address mt-40">
                            <div class="footer-title pb-25">
                                <h6>Contactos</h6>
                            </div>
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-home"></i>
                                    </div>
                                    <div class="cont">
                                        <p>Ilha da Madeira, Caminho *******, Porta ***.</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="cont">
                                        <p>+ *** *** ***</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fa fa-envelope-o"></i>
                                    </div>
                                    <div class="cont">
                                        <p>voluntarioMadeira@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div> <!-- footer address -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- footer top -->    
    </footer>

</template>