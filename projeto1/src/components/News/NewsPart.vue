<template>
        
        <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8" style="background-image: url(../../../assets/images/page-banner-2.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-banner-cont">
                        <h2>Our Courses</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="#">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Courses</li>
                            </ol>
                        </nav>
                    </div>  <!-- page banner cont -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
    
    <!--====== PAGE BANNER PART ENDS ======-->
   
    <!--====== COURSES PART START ======-->
    

    <section id="courses-part" class="pt-120 pb-120 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="courses-top-search">
                        <ul class="nav float-left" id="myTab" role="tablist">
                            <li class="nav-item">
                                <router-link class="active" id="courses-grid-tab" data-toggle="tab" to="#courses-grid" role="tab" aria-controls="courses-grid" aria-selected="true"><i class="fa fa-th-large"></i></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link id="courses-list-tab" data-toggle="tab" to="#courses-list" role="tab" aria-controls="courses-list" aria-selected="false"><i class="fa fa-th-list"></i></router-link>
                            </li>
                            <li class="nav-item">Showning 4 0f 24 Results</li>
                        </ul> <!-- nav -->
                        
                        <div class="courses-search float-right">
                            <form action="#">
                                <input type="text" placeholder="Search">
                                <button type="button"><i class="fa fa-search"></i></button>
                            </form>
                        </div> <!-- courses search -->
                    </div> <!-- courses top search -->
                </div>
            </div> <!-- row -->
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="courses-grid" role="tabpanel" aria-labelledby="courses-grid-tab">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src="../../../assets/images/course/cu-1.jpg" alt="Course">
                                    </div>
                                    <div class="price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="cont">
                                    <ul>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>(20 Reviws)</span>
                                    <router-link to="course-singel"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <router-link to="#"><img src="../../../assets/images/course/teacher/t-1.jpg" alt="teacher"></router-link>
                                        </div>
                                        <div class="name">
                                            <router-link to="#"><h6>Mark anthem</h6></router-link>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src="../../../assets/images/course/cu-2.jpg" alt="Course">
                                    </div>
                                    <div class="price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="cont">
                                    <ul>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>(20 Reviws)</span>
                                    <router-link to="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <router-link to="#"><img src="../../../assets/images/course/teacher/t-2.jpg" alt="teacher"></router-link>
                                        </div>
                                        <div class="name">
                                            <router-link to="#"><h6>Mark anthem</h6></router-link>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src="../../../assets/images/course/cu-3.jpg" alt="Course">
                                    </div>
                                    <div class="price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="cont">
                                    <ul>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>(20 Reviws)</span>
                                    <router-link to="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <router-link to="#"><img src="../../../assets/images/course/teacher/t-3.jpg" alt="teacher"></router-link>
                                        </div>
                                        <div class="name">
                                            <router-link to="#"><h6>Mark anthem</h6></router-link>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src="../../../assets/images/course/cu-4.jpg" alt="Course">
                                    </div>
                                    <div class="price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="cont">
                                    <ul>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>(20 Reviws)</span>
                                    <router-link to="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <router-link to="#"><img src="../../../assets/images/course/teacher/t-4.jpg" alt="teacher"></router-link>
                                        </div>
                                        <div class="name">
                                            <router-link to="#"><h6>Mark anthem</h6></router-link>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src="../../../assets/images/course/cu-5.jpg" alt="Course">
                                    </div>
                                    <div class="price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="cont">
                                    <ul>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>(20 Reviws)</span>
                                    <router-link to="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <router-link to="#"><img src="../../../assets/images/course/teacher/t-5.jpg" alt="teacher"></router-link>
                                        </div>
                                        <div class="name">
                                            <router-link to="#"><h6>Mark anthem</h6></router-link>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src="../../../assets/images/course/cu-1.jpg" alt="Course">
                                    </div>
                                    <div class="price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="cont">
                                    <ul>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <span>(20 Reviws)</span>
                                    <router-link to="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <router-link to="#"><img src="../../../assets/images/course/teacher/t-1.jpg" alt="teacher"></router-link>
                                        </div>
                                        <div class="name">
                                            <router-link to="#"><h6>Mark anthem</h6></router-link>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- singel course -->
                        </div>
                    </div> <!-- row -->
                </div>
                <div class="tab-pane fade" id="courses-list" role="tabpanel" aria-labelledby="courses-list-tab">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="singel-course mt-30">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <div class="thum">
                                            <div class="image">
                                                <img src="../../../assets/images/course/cu-1.jpg" alt="Course">
                                            </div>
                                            <div class="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="cont">
                                            <ul>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviws)</span>
                                            <router-link to="#"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                            <div class="course-teacher">
                                                <div class="thum">
                                                    <router-link to="#"><img src="../../../assets/images/course/teacher/t-1.jpg" alt="teacher"></router-link>
                                                </div>
                                                <div class="name">
                                                    <router-link to="#"><h6>Mark anthem</h6></router-link>
                                                </div>
                                                <div class="admin">
                                                    <ul>
                                                        <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                        <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!--  row  -->
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-12">
                            <div class="singel-course mt-30">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <div class="thum">
                                            <div class="image">
                                                <img src="../../../assets/images/course/cu-2.jpg" alt="Course">
                                            </div>
                                            <div class="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="cont">
                                            <ul>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviws)</span>
                                            <router-link to="#"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                            <div class="course-teacher">
                                                <div class="thum">
                                                    <router-link to="#"><img src="../../../assets/images/course/teacher/t-2.jpg" alt="teacher"></router-link>
                                                </div>
                                                <div class="name">
                                                    <router-link to="#"><h6>Mark anthem</h6></router-link>
                                                </div>
                                                <div class="admin">
                                                    <ul>
                                                        <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                        <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!--  row  -->
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-12">
                            <div class="singel-course mt-30">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <div class="thum">
                                            <div class="image">
                                                <img src="../../../assets/images/course/cu-3.jpg" alt="Course">
                                            </div>
                                            <div class="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="cont">
                                            <ul>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviws)</span>
                                            <router-link to="#"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                            <div class="course-teacher">
                                                <div class="thum">
                                                    <router-link to="#"><img src="../../../assets/images/course/teacher/t-3.jpg" alt="teacher"></router-link>
                                                </div>
                                                <div class="name">
                                                    <router-link to="#"><h6>Mark anthem</h6></router-link>
                                                </div>
                                                <div class="admin">
                                                    <ul>
                                                        <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                        <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!--  row  -->
                            </div> <!-- singel course -->
                        </div>
                        <div class="col-lg-12">
                            <div class="singel-course mt-30">
                                <div class="row no-gutters">
                                    <div class="col-md-6">
                                        <div class="thum">
                                            <div class="image">
                                                <img src="../../../assets/images/course/cu-4.jpg" alt="Course">
                                            </div>
                                            <div class="price">
                                                <span>Free</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="cont">
                                            <ul>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <span>(20 Reviws)</span>
                                            <router-link to="#"><h4>Learn basis javascirpt from start for beginner</h4></router-link>
                                            <div class="course-teacher">
                                                <div class="thum">
                                                    <router-link to="#"><img src="../../../assets/images/course/teacher/t-4.jpg" alt="teacher"></router-link>
                                                </div>
                                                <div class="name">
                                                    <router-link to="#"><h6>Mark anthem</h6></router-link>
                                                </div>
                                                <div class="admin">
                                                    <ul>
                                                        <li><router-link to="#"><i class="fa fa-user"></i><span>31</span></router-link></li>
                                                        <li><router-link to="#"><i class="fa fa-heart"></i><span>10</span></router-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!--  row  -->
                            </div> <!-- singel course -->
                        </div>
                    </div> <!-- row -->
                </div>
            </div> <!-- tab content -->
            <div class="row">
                <div class="col-lg-12">
                    <nav class="courses-pagination mt-50">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <router-link to="#" aria-label="Previous">
                                    <i class="fa fa-angle-left"></i>
                                </router-link>
                            </li>
                            <li class="page-item"><router-link class="active" to="#">1</router-link></li>
                            <li class="page-item"><router-link to="#">2</router-link></li>
                            <li class="page-item"><router-link to="#">3</router-link></li>
                            <li class="page-item">
                                <router-link to="#" aria-label="Next">
                                    <i class="fa fa-angle-right"></i>
                                </router-link>
                            </li>
                        </ul>
                    </nav>  <!-- courses pagination -->
                </div>
            </div>  <!-- row -->
        </div> <!-- container -->
    </section>
    
</template>