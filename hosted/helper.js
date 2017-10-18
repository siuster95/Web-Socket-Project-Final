"use strict";

//set up what circle position to make for certain mouse position
var markerposition = function markerposition(X, Y) {
    //first row
    if (Y < 100) {
        if (X < 100) {
            markerpositionx = 50;
            markerpositiony = 50;
        } else if (X < 200) {
            markerpositionx = 150;
            markerpositiony = 50;
        } else if (X < 300) {
            markerpositionx = 250;
            markerpositiony = 50;
        } else if (X < 400) {
            markerpositionx = 350;
            markerpositiony = 50;
        } else if (X < 500) {
            markerpositionx = 450;
            markerpositiony = 50;
        } else if (X < 600) {
            markerpositionx = 550;
            markerpositiony = 50;
        } else if (X < 700) {
            markerpositionx = 650;
            markerpositiony = 50;
        } else if (X < 800) {
            markerpositionx = 750;
            markerpositiony = 50;
        }
    }
    //second row
    else if (Y < 200) {
            if (X < 100) {
                markerpositionx = 50;
                markerpositiony = 150;
            } else if (X < 200) {
                markerpositionx = 150;
                markerpositiony = 150;
            } else if (X < 300) {
                markerpositionx = 250;
                markerpositiony = 150;
            } else if (X < 400) {
                markerpositionx = 350;
                markerpositiony = 150;
            } else if (X < 500) {
                markerpositionx = 450;
                markerpositiony = 150;
            } else if (X < 600) {
                markerpositionx = 550;
                markerpositiony = 150;
            } else if (X < 700) {
                markerpositionx = 650;
                markerpositiony = 150;
            } else if (X < 800) {
                markerpositionx = 750;
                markerpositiony = 150;
            }
        }
        //third row
        else if (Y < 300) {
                if (X < 100) {
                    markerpositionx = 50;
                    markerpositiony = 250;
                } else if (X < 200) {
                    markerpositionx = 150;
                    markerpositiony = 250;
                } else if (X < 300) {
                    markerpositionx = 250;
                    markerpositiony = 250;
                } else if (X < 400) {
                    markerpositionx = 350;
                    markerpositiony = 250;
                } else if (X < 500) {
                    markerpositionx = 450;
                    markerpositiony = 250;
                } else if (X < 600) {
                    markerpositionx = 550;
                    markerpositiony = 250;
                } else if (X < 700) {
                    markerpositionx = 650;
                    markerpositiony = 250;
                } else if (X < 800) {
                    markerpositionx = 750;
                    markerpositiony = 250;
                }
            }
            //forth row
            else if (Y < 400) {
                    if (X < 100) {
                        markerpositionx = 50;
                        markerpositiony = 350;
                    } else if (X < 200) {
                        markerpositionx = 150;
                        markerpositiony = 350;
                    } else if (X < 300) {
                        markerpositionx = 250;
                        markerpositiony = 350;
                    } else if (X < 400) {
                        markerpositionx = 350;
                        markerpositiony = 350;
                    } else if (X < 500) {
                        markerpositionx = 450;
                        markerpositiony = 350;
                    } else if (X < 600) {
                        markerpositionx = 550;
                        markerpositiony = 350;
                    } else if (X < 700) {
                        markerpositionx = 650;
                        markerpositiony = 350;
                    } else if (X < 800) {
                        markerpositionx = 750;
                        markerpositiony = 350;
                    }
                }
                //fifth row
                else if (Y < 500) {
                        if (X < 100) {
                            markerpositionx = 50;
                            markerpositiony = 450;
                        } else if (X < 200) {
                            markerpositionx = 150;
                            markerpositiony = 450;
                        } else if (X < 300) {
                            markerpositionx = 250;
                            markerpositiony = 450;
                        } else if (X < 400) {
                            markerpositionx = 350;
                            markerpositiony = 450;
                        } else if (X < 500) {
                            markerpositionx = 450;
                            markerpositiony = 450;
                        } else if (X < 600) {
                            markerpositionx = 550;
                            markerpositiony = 450;
                        } else if (X < 700) {
                            markerpositionx = 650;
                            markerpositiony = 450;
                        } else if (X < 800) {
                            markerpositionx = 750;
                            markerpositiony = 450;
                        }
                    }
                    //sixth row
                    else if (Y < 600) {
                            if (X < 100) {
                                markerpositionx = 50;
                                markerpositiony = 550;
                            } else if (X < 200) {
                                markerpositionx = 150;
                                markerpositiony = 550;
                            } else if (X < 300) {
                                markerpositionx = 250;
                                markerpositiony = 550;
                            } else if (X < 400) {
                                markerpositionx = 350;
                                markerpositiony = 550;
                            } else if (X < 500) {
                                markerpositionx = 450;
                                markerpositiony = 550;
                            } else if (X < 600) {
                                markerpositionx = 550;
                                markerpositiony = 550;
                            } else if (X < 700) {
                                markerpositionx = 650;
                                markerpositiony = 550;
                            } else if (X < 800) {
                                markerpositionx = 750;
                                markerpositiony = 550;
                            }
                        }
                        // 7th row
                        else if (Y < 700) {
                                if (X < 100) {
                                    markerpositionx = 50;
                                    markerpositiony = 650;
                                } else if (X < 200) {
                                    markerpositionx = 150;
                                    markerpositiony = 650;
                                } else if (X < 300) {
                                    markerpositionx = 250;
                                    markerpositiony = 650;
                                } else if (X < 400) {
                                    markerpositionx = 350;
                                    markerpositiony = 650;
                                } else if (X < 500) {
                                    markerpositionx = 450;
                                    markerpositiony = 650;
                                } else if (X < 600) {
                                    markerpositionx = 550;
                                    markerpositiony = 650;
                                } else if (X < 700) {
                                    markerpositionx = 650;
                                    markerpositiony = 650;
                                } else if (X < 800) {
                                    markerpositionx = 750;
                                    markerpositiony = 650;
                                }
                            }
                            //8th row
                            else if (Y < 800) {
                                    if (X < 100) {
                                        markerpositionx = 50;
                                        markerpositiony = 750;
                                    } else if (X < 200) {
                                        markerpositionx = 150;
                                        markerpositiony = 750;
                                    } else if (X < 300) {
                                        markerpositionx = 250;
                                        markerpositiony = 750;
                                    } else if (X < 400) {
                                        markerpositionx = 350;
                                        markerpositiony = 750;
                                    } else if (X < 500) {
                                        markerpositionx = 450;
                                        markerpositiony = 750;
                                    } else if (X < 600) {
                                        markerpositionx = 550;
                                        markerpositiony = 750;
                                    } else if (X < 700) {
                                        markerpositionx = 650;
                                        markerpositiony = 750;
                                    } else if (X < 800) {
                                        markerpositionx = 750;
                                        markerpositiony = 750;
                                    }
                                }
};
var changecircleCheck = function changecircleCheck(x, y) {

    //look at top
    var topcheckX = x;
    var topcheckY = y;
    //look at left
    var leftcheckX = x;
    var leftcheckY = y;
    //look at right
    var rightcheckX = x;
    var rightcheckY = y;
    //look at bottom 
    var bottomcheckX = x;
    var bottomcheckY = y;
    //diagonal right top
    var DrightTopcheckX = x;
    var DrightTopcheckY = y;
    //diagonal left top
    var DleftTopcheckX = x;
    var DleftTopcheckY = y;
    //diagonal right bottom
    var DrightBottomcheckX = x;
    var DrightBottomcheckY = y;
    //diagonal left bottom
    var DleftBottomcheckX = x;
    var DleftBottomcheckY = y;
    //check to see whether to change the top row or not
    while (topbool == true) {
        topcheckX = topcheckX;
        topcheckY = topcheckY - 1;
        //see if we hit the wall
        if (topcheckY > -1) {
            //if there is nothing top, get out
            if (circleobjs[topcheckX][topcheckY] == null) {
                topbool = false;
                continue;
            }
            //check to see if the one next is not the same color
            if (circleobjs[topcheckX][topcheckY].circle.R == R && circleobjs[topcheckX][topcheckY].circle.G == G && circleobjs[topcheckX][topcheckY].circle.B == B && topcheckY == y - 1) {
                topbool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[topcheckX][topcheckY].circle.R == R && circleobjs[topcheckX][topcheckY].circle.G == G && circleobjs[topcheckX][topcheckY].circle.B == B) {
                topbool = false;
                changetop = true;
                continue;
            }
        } else {
            topbool = false;
        }
    }
    //check to see whether to change the left row or not
    while (leftbool == true) {
        leftcheckX = leftcheckX - 1;
        leftcheckY = leftcheckY;
        //see if we will hit the wall
        if (leftcheckX > -1) {
            //if there is nothing top, get out
            if (circleobjs[leftcheckX][leftcheckY] == null) {
                leftbool = false;
                continue;
            }
            //check to see whether the literal next piece is the same color 
            if (circleobjs[leftcheckX][leftcheckY].circle.R == R && circleobjs[leftcheckX][leftcheckY].circle.G == G && circleobjs[leftcheckX][leftcheckY].circle.B == B && leftcheckX == x - 1) {
                leftbool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[leftcheckX][leftcheckY].circle.R == R && circleobjs[leftcheckX][leftcheckY].circle.G == G && circleobjs[leftcheckX][leftcheckY].circle.B == B) {
                leftbool = false;
                changeleft = true;
                continue;
            }
        } else {
            leftbool = false;
        }
    }
    //check to see whether to change the bottom row or not
    while (bottombool == true) {
        bottomcheckX = bottomcheckX;
        bottomcheckY = bottomcheckY + 1;
        //see if we will hit the wall
        if (bottomcheckY < 8) {
            //if there is nothing top, get out
            if (circleobjs[bottomcheckX][bottomcheckY] == null) {
                bottombool = false;
                continue;
            }
            //check to see if the next literal piece is the same color
            if (circleobjs[bottomcheckX][bottomcheckY].circle.R == R && circleobjs[bottomcheckX][bottomcheckY].circle.G == G && circleobjs[bottomcheckX][bottomcheckY].circle.B == B && bottomcheckY == y + 1) {
                bottombool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[bottomcheckX][bottomcheckY].circle.R == R && circleobjs[bottomcheckX][bottomcheckY].circle.G == G && circleobjs[bottomcheckX][bottomcheckY].circle.B == B) {
                bottombool = false;
                changebottom = true;
                continue;
            }
        } else {
            bottombool = false;
        }
    }
    //check to see whether to change the right row or not
    while (rightbool == true) {
        rightcheckX = rightcheckX + 1;
        rightcheckY = rightcheckY;
        //see if we will hit the wall
        if (rightcheckX < 8) {
            //if there is nothing top, get out
            if (circleobjs[rightcheckX][rightcheckY] == null) {
                rightbool = false;
                continue;
            }
            //check to see if the literal next piece is the same color
            if (circleobjs[rightcheckX][rightcheckY].circle.R == R && circleobjs[rightcheckX][rightcheckY].circle.G == G && circleobjs[rightcheckX][rightcheckY].circle.B == B && rightcheckX == x + 1) {
                rightbool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[rightcheckX][rightcheckY].circle.R == R && circleobjs[rightcheckX][rightcheckY].circle.G == G && circleobjs[rightcheckX][rightcheckY].circle.B == B) {
                rightbool = false;
                changeright = true;
                continue;
            }
        } else {
            rightbool = false;
        }
    }
    //check to see whether to change the Diagonal right top row or not
    while (DrightTopbool == true) {
        DrightTopcheckX = DrightTopcheckX + 1;
        DrightTopcheckY = DrightTopcheckY - 1;
        //see if we will hit the wall
        if (DrightTopcheckX < 8 && DrightTopcheckY > 0) {
            //if there is nothing top, get out
            if (circleobjs[DrightTopcheckX][DrightTopcheckY] == null) {
                DrightTopbool = false;
                continue;
            }
            //check to see if the next literal piece is the same color
            if (circleobjs[DrightTopcheckX][DrightTopcheckY].circle.R == R && circleobjs[DrightTopcheckX][DrightTopcheckY].circle.G == G && circleobjs[DrightTopcheckX][DrightTopcheckY].circle.B == B && DrightTopcheckX == x + 1 && DrightTopcheckY == y - 1) {
                DrightTopbool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[DrightTopcheckX][DrightTopcheckY].circle.R == R && circleobjs[DrightTopcheckX][DrightTopcheckY].circle.G == G && circleobjs[DrightTopcheckX][DrightTopcheckY].circle.B == B) {
                DrightTopbool = false;
                changeDrightTop = true;
                continue;
            }
        } else {
            DrightTopbool = false;
        }
    }
    //check to see whether to change the Diagonal left top row or not
    while (DleftTopbool == true) {
        DleftTopcheckX = DleftTopcheckX - 1;
        DleftTopcheckY = DleftTopcheckY - 1;
        //see if we will hit the wall
        if (DleftTopcheckX > 0 && DleftTopcheckY > 0) {
            //if there is nothing top, get out
            if (circleobjs[DleftTopcheckX][DleftTopcheckY] == null) {
                DleftTopbool = false;
                continue;
            }
            //check to see if the next literal piece is the same color
            if (circleobjs[DleftTopcheckX][DleftTopcheckY].circle.R == R && circleobjs[DleftTopcheckX][DleftTopcheckY].circle.G == G && circleobjs[DleftTopcheckX][DleftTopcheckY].circle.B == B && DleftTopcheckX == x - 1 && DleftTopcheckY == y - 1) {
                DleftTopbool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[DleftTopcheckX][DleftTopcheckY].circle.R == R && circleobjs[DleftTopcheckX][DleftTopcheckY].circle.G == G && circleobjs[DleftTopcheckX][DleftTopcheckY].circle.B == B) {
                DleftTopbool = false;
                changeDleftTop = true;
                continue;
            }
        } else {
            DleftTopbool = false;
        }
    }
    //check to see whether or change the Diagonal right bottom row or not
    while (DrightBottombool == true) {
        DrightBottomcheckX = DrightBottomcheckX + 1;
        DrightBottomcheckY = DrightBottomcheckY + 1;
        //see if we will hit the wall
        if (DrightBottomcheckX < 8 && DrightBottomcheckY < 8) {
            //if there is nothing top, get out
            if (circleobjs[DrightBottomcheckX][DrightBottomcheckY] == null) {
                DrightBottombool = false;
                continue;
            }
            //check to see if the next literal piece is the same color
            if (circleobjs[DrightBottomcheckX][DrightBottomcheckY].circle.R == R && circleobjs[DrightBottomcheckX][DrightBottomcheckY].circle.G == G && circleobjs[DrightBottomcheckX][DrightBottomcheckY].circle.B == B && DrightBottomcheckX == x + 1 && DrightBottomcheckY == y + 1) {
                DrightBottombool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[DrightBottomcheckX][DrightBottomcheckY].circle.R == R && circleobjs[DrightBottomcheckX][DrightBottomcheckY].circle.G == G && circleobjs[DrightBottomcheckX][DrightBottomcheckY].circle.B == B) {
                DrightBottombool = false;
                changeDrightBottom = true;
                continue;
            }
        } else {
            DrightBottombool = false;
        }
    }
    //check to see whether or change the Diagonal left bottom row or not
    while (DleftBottombool == true) {
        DleftBottomcheckX = DleftBottomcheckX - 1;
        DleftBottomcheckY = DleftBottomcheckY + 1;
        //see if we will hit the wall
        if (DleftBottomcheckX > 0 && DleftBottomcheckY < 8) {
            //if there is nothing top, get out
            if (circleobjs[DleftBottomcheckX][DleftBottomcheckY] == null) {
                DleftBottombool = false;
                continue;
            }
            //check to see if the next literal piece is the same color
            if (circleobjs[DleftBottomcheckX][DleftBottomcheckY].circle.R == R && circleobjs[DleftBottomcheckX][DleftBottomcheckY].circle.G == G && circleobjs[DleftBottomcheckX][DleftBottomcheckY].circle.B == B && DleftBottomcheckX == x - 1 && DleftBottomcheckY == y + 1) {
                DleftBottombool = false;
                continue;
            }
            //if the piece color is the same as this client's, signal to change
            if (circleobjs[DleftBottomcheckX][DleftBottomcheckY].circle.R == R && circleobjs[DleftBottomcheckX][DleftBottomcheckY].circle.G == G && circleobjs[DleftBottomcheckX][DleftBottomcheckY].circle.B == B) {
                DleftBottombool = false;
                changeDleftBottom = true;
                continue;
            }
        } else {
            DleftBottombool = false;
        }
    }

    if (changebottom || changetop || changeleft || changeright || changeDleftBottom || changeDleftTop || changeDrightBottom || changeDrightTop) {
        return true;
    } else {
        return false;
    }
};

var changeCircle = function changeCircle(x, y) {

    //change the top circles 
    if (changetop) {
        var changetopX = x;
        var changetopY = y - 1;
        var changecircle = circleobjs[changetopX][changetopY];
        while (changecircle != null && changetopY > 0 && circleobjs[changetopX][changetopY].circle.R != R && circleobjs[changetopX][changetopY].circle.G != G && circleobjs[changetopX][changetopY].circle.B != B) {
            circleobjs[changetopX][changetopY].circle.R = R;
            circleobjs[changetopX][changetopY].circle.G = G;
            circleobjs[changetopX][changetopY].circle.B = B;
            changetopY = changetopY - 1;
            changecircle = circleobjs[changetopX][changetopY];
        }
    }
    //change the left circles 
    if (changeleft) {
        var changeleftX = x - 1;
        var changeleftY = y;
        var _changecircle = circleobjs[changeleftX][changeleftY];
        while (_changecircle != null && changeleftX > 0 && circleobjs[changeleftX][changeleftY].circle.R != R && circleobjs[changeleftX][changeleftY].circle.G != G && circleobjs[changeleftX][changeleftY].circle.B != B) {
            circleobjs[changeleftX][changeleftY].circle.R = R;
            circleobjs[changeleftX][changeleftY].circle.G = G;
            circleobjs[changeleftX][changeleftY].circle.B = B;
            changeleftX = changeleftX - 1;
            _changecircle = circleobjs[changeleftX][changeleftY];
        }
    }
    //change the bottom circle
    if (changebottom) {
        var changebottomX = x;
        var changebottomY = y + 1;
        var _changecircle2 = circleobjs[changebottomX][changebottomY];
        while (_changecircle2 != null && changebottomY < 8 && circleobjs[changebottomX][changebottomY].circle.R != R && circleobjs[changebottomX][changebottomY].circle.G != G && circleobjs[changebottomX][changebottomY].circle.B != B) {
            circleobjs[changebottomX][changebottomY].circle.R = R;
            circleobjs[changebottomX][changebottomY].circle.G = G;
            circleobjs[changebottomX][changebottomY].circle.B = B;
            changebottomY = changebottomY + 1;
            _changecircle2 = circleobjs[changebottomX][changebottomY];
        }
    }
    //change the right circle
    if (changeright) {
        var changerightX = x + 1;
        var changerightY = y;
        var _changecircle3 = circleobjs[changerightX][changerightY];
        while (_changecircle3 != null && changerightX < 8 && circleobjs[changerightX][changerightY].circle.R != R && circleobjs[changerightX][changerightY].circle.G != G && circleobjs[changerightX][changerightY].circle.B != B) {
            circleobjs[changerightX][changerightY].circle.R = R;
            circleobjs[changerightX][changerightY].circle.G = G;
            circleobjs[changerightX][changerightY].circle.B = B;
            changerightX = changerightX + 1;
            _changecircle3 = circleobjs[changerightX][changerightY];
        }
    }
    //change the top right circle
    if (changeDrightTop) {
        var changeToprightX = x + 1;
        var changeToprightY = y - 1;
        var _changecircle4 = circleobjs[changeToprightX][changeToprightY];
        while (_changecircle4 != null && changeToprightX < 8 && changeToprightY > 0 && circleobjs[changeToprightX][changeToprightY].circle.R != R && circleobjs[changeToprightX][changeToprightY].circle.G != G && circleobjs[changeToprightX][changeToprightY].circle.B != B) {
            circleobjs[changeToprightX][changeToprightY].circle.R = R;
            circleobjs[changeToprightX][changeToprightY].circle.G = G;
            circleobjs[changeToprightX][changeToprightY].circle.B = B;
            changeToprightX = changeToprightX + 1;
            changeToprightY = changeToprightY - 1;
            _changecircle4 = circleobjs[changeToprightX][changeToprightY];
        }
    }
    //change the top left circle
    if (changeDleftTop) {
        var changeTopleftX = x - 1;
        var changeTopleftY = y - 1;
        var _changecircle5 = circleobjs[changeTopleftX][changeTopleftY];
        while (_changecircle5 != null && changeTopleftX > 0 && changeTopleftY > 0 && circleobjs[changeTopleftX][changeTopleftY].circle.R != R && circleobjs[changeTopleftX][changeTopleftY].circle.G != G && circleobjs[changeTopleftX][changeTopleftY].circle.B != B) {
            circleobjs[changeTopleftX][changeTopleftY].circle.R = R;
            circleobjs[changeTopleftX][changeTopleftY].circle.G = G;
            circleobjs[changeTopleftX][changeTopleftY].circle.B = B;
            changeTopleftX = changeTopleftX - 1;
            changeTopleftY = changeTopleftY - 1;
            _changecircle5 = circleobjs[changeTopleftX][changeTopleftY];
        }
    }
    //change the bottom right circle 
    if (changeDrightBottom) {
        var changeBottomrightX = x + 1;
        var changeBottomrightY = y + 1;
        var _changecircle6 = circleobjs[changeBottomrightX][changeBottomrightY];
        while (_changecircle6 != null && changeBottomrightX < 8 && changeBottomrightY < 8 && circleobjs[changeBottomrightX][changeBottomrightY].circle.R != R && circleobjs[changeBottomrightX][changeBottomrightY].circle.G != G && circleobjs[changeBottomrightX][changeBottomrightY].circle.B != B) {
            circleobjs[changeBottomrightX][changeBottomrightY].circle.R = R;
            circleobjs[changeBottomrightX][changeBottomrightY].circle.G = G;
            circleobjs[changeBottomrightX][changeBottomrightY].circle.B = B;
            changeBottomrightX = changeBottomrightX + 1;
            changeBottomrightY = changeBottomrightY + 1;
            _changecircle6 = circleobjs[changeBottomrightX][changeBottomrightY];
        }
    }
    //change the bottom left circle
    if (changeDleftBottom) {
        var changeBottomleftX = x - 1;
        var changeBottomleftY = y + 1;
        var _changecircle7 = circleobjs[changeBottomleftX][changeBottomleftY];
        while (_changecircle7 != null && changeBottomleftX > 0 && changeBottomleftY < 8 && circleobjs[changeBottomleftX][changeBottomleftY].circle.R != R && circleobjs[changeBottomleftX][changeBottomleftY].circle.G != G && circleobjs[changeBottomleftX][changeBottomleftY].circle.B != B) {
            circleobjs[changeBottomleftX][changeBottomleftY].circle.R = R;
            circleobjs[changeBottomleftX][changeBottomleftY].circle.G = G;
            circleobjs[changeBottomleftX][changeBottomleftY].circle.B = B;
            changeBottomleftX = changeBottomleftX - 1;
            changeBottomleftY = changeBottomleftY + 1;
            _changecircle7 = circleobjs[changeBottomleftX][changeBottomleftY];
        }
    }
};
