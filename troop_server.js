<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>GATO HOME</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles/troop_styles.css">
</head>
<body>

<!--NAV BAR--> 
    <!--Navbars need two classes-->
    <!--Initialize the nav bar-->
<nav class="navbar navbar-inverse">
    <!--Put everything in the navbar inside a container (for padding)-->
    <div class="container-fluid">
    <!--Fill nav bar with content-->
    <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-main" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
            <a class="navbar-brand" href="/">99 FOR THE TROOPS</a>
    </div>


        <ul class="nav navbar-nav navbar-right collapse navbar-collapse" id="bs-navbar-collapse-main">
            <li><a href="/about">About</a></li>
            <li><a href="/vets">Disabled Vets</a></li>
            <li><a href="/how">How It Works</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

    </div>
</nav>

<!--BACKGROUND CAROUSEL-->
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div id="my-slider" class="carousel slide" data-ride="carousel">
                
                <!-- Indicators dot nav -->
                <ol class="carousel-indicators">
                    <li data-target="#my-slider" data-slide-to="0" class="active"></li>
                    <li data-target="#my-slider" data-slide-to="1"></li>
                    <li data-target="#my-slider" data-slide-to="2"></li>
                </ol>
                <!-- Wrapper for Slides-->
                <div class="carousel-inner" role="listbox">

                    <!--Carousel 1-->
                    <div class="item active">
                        <img src="https://source.unsplash.com/9C8r4QUwZRQ"/>
                        <div class="carousel-caption" id="carousel-content">
                                <div id="content">
                                        <h1><span class="99banner">99 For The Troops</span></h1>
                                        <h3>Trust where your money is going.</h3>
                                        <h3>99% of all contributions go directly to veterans.</h3>
                                        <hr>
                                    </div>
                        </div>
                    </div>

                    <!--Carousel 2-->
                    <div class="item">
                        <!-- <img src="https://source.unsplash.com/fUWCe_pPPY0"/> -->
                        <img src="salute.jpeg"/>
                        <div class="carousel-caption" id="carousel-content">
                                <div id="content">
                                        <h1><span class="99banner">99 For The Troops</span></h1>
                                        <hr>
                                        <a id="donateButton" class="btn btn-default btn btn-lg" href="/how-donate" role="button">DONATE TO VETS</a>
                                </div>
                        </div>
                    </div>
                
                    <!--Carousel 3-->
                    <div class="item">
                            <img src="https://source.unsplash.com/OSVh2HgbaZc"/>
                            <div class="carousel-caption" id="carousel-content">
                                    <div id="content">
                                            <h1><span class="99banner">99 For The Troops</span></h1>
                                            <hr>
                                            <a id="donateButton" class="btn btn-default btn btn-lg" href="/how-donate" role="button">
                                            Total Donated: $100 <br/>
                                            Total Received by Vets: $99 
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>



                
                <!-- Next and Prev Buttons -->
                <a class="left carousel-control" href="#my-slider" role="button" data-slide="prev">
                    <span id="chevron" class="glyphicon glyph-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>

                <a class="right carousel-control" href="#my-slider" role="button" data-slide="next">
                        <span id="chevron" class="glyphicon glyph-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            
        </div>
    </div>
</div>


<!--CITE COPYRIGHT-->
<footer class="footer">
    <div id="wrap">
        <div id="main" class="container clear-top">
            <p style="color: rgba(182, 188, 201, 0.295)"><cite>Image sources: unsplash.com, pixabay.com</cite></p>
        </div>
    </div>
</footer>

<!--Put in this order: jquery first because bootstrap relies on jquery-->          
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous">
</script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
