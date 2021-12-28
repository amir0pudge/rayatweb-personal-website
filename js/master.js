
        

    $(function () {

        $('#menuclick').click(function () {
            $('#menu').delay(400).fadeIn(500)
        })
        $('#close').click(function () {
            $('#menu').delay(400).fadeOut(500)
        })

        $('#gotop').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 0)
        })
        $('#amir').click(function () {
            alert('salam')
            $('html,body').animate({ scrollTop: 0 }, 0)
        })

        $(document).scroll(function () {
            temp = $(this).scrollTop()
            var x = $('#gotop').offset().top
            var x1 = $('.h1').offset().top
            var x2 = $('.h2').offset().top
            var x3 = $('.h3').offset().top
            var x4 = $('.h4').offset().top
            var x5 = $('.h5').offset().top
            console.log(x)
            if (temp > 300) {
                // alert('x')
                $('#gotop').fadeIn(500)
            } else {
                $('#gotop').fadeOut(500)
                // alert(temp)
            }

            if (temp > 0) {
                $('#scroll>li').eq(0).css('color', '#C49B66')
                $('#scroll>li').eq(0).siblings('li').css('color', 'white')
            }
            if (temp > 400) {
                $('#scroll>li').eq(1).css('color', '#C49B66')
                $('#scroll>li').eq(1).siblings('li').css('color', 'white')
                $('.percent').eq(0).css('animation', 'none')
                $('.percent').eq(1).css('animation', 'none')
                $('.percent').eq(2).css('animation', 'none')
                $('.percent').eq(3).css('animation', 'none')
            }
            if (temp > 1200) {
                $('#scroll>li').eq(1).css('color', '#C49B66')
                $('#scroll>li').eq(1).siblings('li').css('color', 'white')
                $('.percent').eq(0).css('animation', '_width1 2s forwards')
                $('.percent').eq(1).css('animation', '_width2 2s forwards')
                $('.percent').eq(2).css('animation', '_width3 2s forwards')
                $('.percent').eq(3).css('animation', '_width4 2s forwards')
                var i = 0;
                if (i == 0) {
                    var x = setInterval(_set1, 70)
                    var z = setInterval(_set2, 70)
                    var y = setInterval(_set3, 70)
                    var p = setInterval(_set4, 70)
                    var m = 1;

                    function _set1() {
                        m = m + 1
                        if (m >= 96) {
                            clearInterval(x)
                            i++

                        } else {
                            $('.percent').eq(0).text(m + '%')
                        }
                    }
                    function _set2() {
                        m = m + 1
                        if (m >= 91) {
                            clearInterval(z)
                            i++
                        } else {
                            $('.percent').eq(1).text(m + '%')
                        }
                    }
                    function _set3() {
                        m = m + 1
                        if (m >= 81) {
                            clearInterval(y)
                            i++
                        } else {
                            $('.percent').eq(2).text(m + '%')
                        }
                    }
                    function _set4() {
                        m = m + 1
                        if (m >= 81) {
                            clearInterval(p)
                            i++
                        } else {
                            $('.percent').eq(3).text(m + 3 + '%')
                        }
                    }
                } else {
                    $('.percent').eq(0).text('95%')
                    $('.percent').eq(1).text('90%')
                    $('.percent').eq(2).text('80%')
                    $('.percent').eq(0).text('80%')
                }

            }
            if (temp > 2000) {
                $('#scroll>li').eq(2).css('color', '#C49B66')
                $('#scroll>li').eq(2).siblings('li').css('color', 'white')
                $('.percent').eq(0).css('animation', 'none')
                $('.percent').eq(1).css('animation', 'none')
                $('.percent').eq(2).css('animation', 'none')
                $('.percent').eq(3).css('animation', 'none')
            }

            if (temp > 2400) {

                var w = setInterval(_set5, 100)
                var q = setInterval(_set6, 70)
                var a = setInterval(_set7, 70)
                var d = setInterval(_set8, 10)
                var m = 0;
                var t = 0;
                var h = 0;
                var g = 0;
                var v = 0;

                function _set5() {
                    t++
                    if (t >= 21) {
                        clearInterval(w)
                    } else {
                        $('.counter').eq(0).text(t)
                    }
                }
                function _set6() {
                    h = h + 10
                    if (h >= 121) {
                        clearInterval(q)
                    } else {
                        $('.counter').eq(1).text(h)
                    }
                }
                function _set7() {
                    g++
                    if (g >= 15) {
                        clearInterval(a)
                    } else {
                        $('.counter').eq(2).text(g)
                    }
                }
                function _set8() {
                    v = v + 50
                    if (v >= 4223) {
                        clearInterval(d)
                    } else {
                        $('.counter').eq(3).text(v)
                    }
                }

            }

            if (temp > 2900) {
                $('#scroll>li').eq(3).css('color', '#C49B66')
                $('#scroll>li').eq(3).siblings('li').css('color', 'white')
            }
            if (temp > 3700) {
                $('#scroll>li').eq(4).css('color', '#C49B66')
                $('#scroll>li').eq(4).siblings('li').css('color', 'white')
            }
        })






        for (z = 1; z < 5; z++) {
            if (z == 1) {

                var temp = 'Amir Rayat';

                var i = 0
                var x = setInterval(amir, 300)
                var count1 = temp.length

                function amir() {
                    if (i < temp.length) {
                        $('#changetitle').text(($('#changetitle').text()) + (temp.charAt(i)))
                        i++
                    } else {
                        clearInterval(x)
                        k = setInterval(amir1, 300)
                    }
                }

                var p = 1
                function amir1() {
                    if (p <= count1) {
                        $('#changetitle').text(($('#changetitle').text()).substring(0, ((temp.length) - p)))
                        p++
                    } else {
                        f = setInterval(amir2, 300)
                        clearInterval(k)
                        // alert("end")
                        // f = setInterval(amir2, 400)
                    }
                }


            } else if (z == 2) {
                var temp1 = 'Developer';
                var count2 = temp1.length
                var s = 0;
                var f;
                var o;

                function amir2() {
                    if (s < temp1.length) {
                        $('#changetitle').text(($('#changetitle').text()) + (temp1.charAt(s)))
                        s++
                    } else {
                        clearInterval(f)
                        p = setInterval(amir3, 300)
                    }
                }

                var d = 1
                function amir3() {
                    if (d <= count2) {
                        $('#changetitle').text(($('#changetitle').text()).substring(0, ((temp1.length) - d)))
                        d++
                    } else {
                        clearInterval(p)
                        o = setInterval(amir4, 300)
                    }
                }
            } else if (z == 3) {
                var q = 0;
                var v;
                var o;
                var b;
                var m;
                var temp2 = 'Freelancer'
                var count3 = temp2.length
                function amir4() {
                    if (q < temp2.length) {
                        $('#changetitle').text(($('#changetitle').text()) + (temp2.charAt(q)))
                        q++
                    } else {
                        clearInterval(o)
                        v = setInterval(amir5, 300)
                    }
                }

                var b = 1
                function amir5() {
                    if (b <= count3) {
                        $('#changetitle').text(($('#changetitle').text()).substring(0, ((temp2.length) - b)))
                        b++
                    } else {
                        clearInterval(v)
                        m = setInterval(amir6, 300)
                    }
                }


            } else if (z == 4) {
                var t = 0;
                var m;
                var x;
                var temp3 = 'Amir Rayat'
                function amir6() {
                    if (t < temp3.length) {
                        $('#changetitle').text(($('#changetitle').text()) + (temp3.charAt(t)))
                        t++
                    } else {
                        clearInterval(m)
                    }
                }


            }
        }
        var count = 0
        $('.img>img').click(function () {
            $('.slider').fadeIn(500)
            $('#gotop').css('margin', '1000px')
        })
        $('.close').click(function () {
            $('.slider').fadeOut(500)
            $('#gotop').css('margin', '0')
        })
        $('.img').click(function () {
            count = $(this).index()
            $('.slider>div>img').attr('src', ($(this).children('img').attr('src')))
            console.log(count)
            if (count == 0) {
                $('.slider>div>p').text('Responsive Project 1')
            } else if (count == 1) {
                $('.slider>div>p').text('Responsive Project 2')
            } else if (count == 2) {
                $('.slider>div>p').text(' Calculator Project')
            } else if (count == 3) {
                $('.slider>div>p').text('BMI Test Project')
            } else if (count == 4) {
                $('.slider>div>p').text('Stop Watch Project')
            } else if (count == 5) {
                $('.slider>div>p').text('Coming Soon')
            }
        })
        $('.right').click(function () {
            if (count < ($('.img').length) - 1) {
                limp = $('.img').eq(count).next().children('img').attr('src')
                count++
            } else {
                count = 0
                limp = $('.img').eq(count).children('img').attr('src')
            }
            $('.slider>div>img').attr('src', limp)
            if (count == 0) {
                $('.slider>div>p').text('Responsive Project 1')
            } else if (count == 1) {
                $('.slider>div>p').text('Responsive Project 2')
            } else if (count == 2) {
                $('.slider>div>p').text(' Calculator Project')
            } else if (count == 3) {
                $('.slider>div>p').text('BMI Test Project')
            } else if (count == 4) {
                $('.slider>div>p').text('Stop Watch Project')
            } else if (count == 5) {
                $('.slider>div>p').text('Coming Soon')
            }
        })
        $('.left').click(function () {
            if (count != 0) {
                limp = $('.img').eq(count).prev().children('img').attr('src')
                count--
            } else {
                count = ($('.img').length) - 1
                limp = $('.img').eq(count).children('img').attr('src')
            }
            $('.slider>div>img').attr('src', limp)
            if (count == 0) {
                $('.slider>div>p').text('Responsive Project 1')
            } else if (count == 1) {
                $('.slider>div>p').text('Responsive Project 2')
            } else if (count == 2) {
                $('.slider>div>p').text(' Calculator Project')
            } else if (count == 3) {
                $('.slider>div>p').text('BMI Test Project')
            } else if (count == 4) {
                $('.slider>div>p').text('Stop Watch Project')
            } else if (count == 5) {
                $('.slider>div>p').text('Coming Soon')
            }
        })

    })



