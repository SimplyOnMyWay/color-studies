(ns simplyonmyway.dynamic
  (:require
   [quil.core :as q :include-macros true]
   [simplyonmyway.randomutils :as r]))

(defn w
  ([val] (* (q/width) val))
  ([] (* (w 1.0))))

(defn h
  ([val] (* (q/height) val))
  ([] (* (h 1.0))))

(defn hw
  [p]
  [(w (p 0)) (h (p 1))])

(def R (new r/random))

(defn gauss
  ([mean sd]
   (.random_gaussian R mean sd))
  ([]
   (gauss 0 1)))

(defn random-int
  ([l u]
   (.random_int R l u))
  ([u]
   (.random_int R 0 u)))

(defn pareto
 [l u shape]
  (.random_pareto_bounded R l u shape))

(def phi (/ (+ 1 (.sqrt js/Math 5)) 2)) ;;golden ratio

(def PI (.-PI js/Math))

(def col-vec-mess
  [[0 79 0 0.1] [354 48 0 0.1]])

(defn setup
  []
  (q/no-stroke)
  (q/color-mode :hsb 360 100 100 1.0)
  {:dim 7})

(defn update-state
  [state]
  {:dim (- (:dim state) 0.1)})

(defn draw
  [state]

  (q/no-loop)
  
  (q/no-fill)

  (def bg-col [0 0 100 1.0])           ; white
  (apply q/background bg-col)

  (def col-pal-1 [[188 45 44 1.0] ;deep green ground
                  [26 4 94 1.0]   ;light grey ground
                  [26 30 44 1.0]  ;brownish-green
                  [26 38 80 1.0]  ;ochreous yellow
                  ])             

  (def col-pal-2 [[0 91 55 1.0]  ;deep red ground
                  [45 40 100 1.0]
                  ;;[33 22 75 1.0] ;yellowish offwhite ground
                  [22 92 50 1.0] ;ochre
                  [39 65 64 1.0] ;Naples yellow
                  ])

  (def col-pal-3 [[203 48 15 1.0]         ;v dark ground
                  [0 0 100 1.0]           ; white ground
                  [165 3 20 1.0]          ; dark almost-black grey
                  [165 3 70 1.0]          ; light grey
                  ])
  
  (comment
    (q/with-stroke [0 100 0 1.0]
      (q/with-fill nil
        (q/rect 0 0 (w) (h)))))

  (let [col-vec col-pal-3
        rr (/ (w) (h))
        bx  0.1                         ;border
        by (* rr bx)
        g-width (/ (- 1.0 (* 2 bx)) 2) ;; = lgx (- 0.5 bx)
        g-height (- 1.0 (* 2 by))
        g-height g-height
        inner-rect-width (* g-width 0.415)
        inner-rect-height (* g-height 0.415)
        l-inner-rect-x (+ bx (- (/ g-width 2) (/ inner-rect-width 2)))
        r-inner-rect-x (+ l-inner-rect-x g-width)
        inner-rect-y (+ by (- (/ g-height 2) (/ inner-rect-height 2)))
        stripe-width (* g-width 0.667)
        stripe-height 0.05
        stripe-x (+ bx (* g-width 0.667))
        top-stripe-y (+ by g-height (/ stripe-height 2))
        bot-stripe-y (+ top-stripe-y stripe-height)]
    (q/with-fill (col-vec 0)
      (q/rect (w bx) (h by) (w g-width) (h g-height)))
    (q/with-fill (col-vec 1)
      (q/rect (w 0.5) (h by) (w g-width) (h g-height)))

    ;; inner rectangles
    (q/with-fill (col-vec 2)
      (q/rect (w l-inner-rect-x) (h inner-rect-y) (w inner-rect-width) (h inner-rect-height)))
    (q/with-fill (col-vec 3)
      (q/rect (w r-inner-rect-x) (h inner-rect-y) (w inner-rect-width) (h inner-rect-height)))    


    ;; stripes beneath...
    (q/with-fill (col-vec 2)
      (q/rect (w stripe-x) (h top-stripe-y) (w stripe-width) (h stripe-height)))
    (q/with-fill (col-vec 3)
      (q/rect (w stripe-x) (h bot-stripe-y) (w stripe-width) (h stripe-height)))

    )



  )
