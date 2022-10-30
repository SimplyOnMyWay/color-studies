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
  (def bg-col [48 42 27 1.0])           ; default = Rosc moss
  (apply q/background bg-col)

  (def jja-col-vec [[208 65 74 1.0]
                  [107 60 45 1.0]
         ;         [79 83 74 1.0]
;                   bg-col
                   [79 83 74 1.0]
                   [0 76 94 1.0]
                   ])

  (def ja-col-vec [[0 0 100 1.0]        ; white
                   [141 32 45 1.0]      ; moss
                   bg-col               ; scott olive
                   [197 84 45 1.0]      ; teal
                   ])             

  (let [rr (/ (w) (h))
        f (:dim state)
        num-rows (* f 24)
        num-cols (* f 10)
        num-border-cols (* f 1)
        num-border-rows (* f 1)

        num-rows-adj (+ num-rows (* 2 num-border-rows))
        num-cols-adj (+ num-cols (* 2 num-border-cols))
        
        dx (/ 1 num-cols-adj)
        xs (+ (* num-border-cols dx) (/ dx 2))
        xe (- 1 (* num-border-cols dx))
        
        dy (/ 1 num-rows-adj)
        ys (+ (* num-border-rows dy) (/ dy 2))
        ye (- 1 (* num-border-rows dy))

        r1 dx
        r2 (* dx (- 1 phi)
              )
        div-major-1 (+ ys (/ (- ye ys) 3))
        div-major-2 (+ ys (* 2 (/ (- ye ys) 3)))
        div-minor 2]
    (doseq [xx (range xs xe dx)
            yy (range ys ye dy)]
      (let [x (+ xx (gauss 0 0.0))
            y (+ yy (gauss 0 0.005))]
        (cond
          (< y div-major-1)
          (do
            (q/with-fill (ja-col-vec 0) 
              (q/ellipse (w x) (h y) (w r1) (w r1)))
            ;; inner
            (cond
              (< y (+ (* num-border-rows dy) (/ (* f 1 div-minor) num-rows-adj)))
              (q/with-fill (ja-col-vec 0)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ (* num-border-rows dy) (/ (* f 1 div-minor) num-rows-adj))) (< y (+ (* num-border-rows dy) (/ (* f 2 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 1)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ (* num-border-rows dy) (/ (* f 2 div-minor) num-rows-adj))) (< y (+ (* num-border-rows dy) (/ (* f 3 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 2)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ (* num-border-rows dy) (/ (* f 3 div-minor) num-rows-adj))) (< y div-major-1))
              (q/with-fill (ja-col-vec 3)
                (q/ellipse (w x) (h y) (w r2) (w r2)))))

          (and (> y div-major-1) (< y div-major-2))
          (do
            (q/with-fill (ja-col-vec 1) 
              (q/ellipse (w x) (h y) (w r1) (w r1)))
            ;; inner
            (cond
              (and (> y div-major-1) (< y (+ div-major-1 (/ (* f 1 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 3)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ div-major-1 (/ (* f 1 div-minor) num-rows-adj))) (< y (+  div-major-1 (/ (* f 2 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 2)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ div-major-1 (/ (* f 2 div-minor) num-rows-adj))) (< y (+ div-major-1 (/ (* f 3 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 1)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ div-major-1 (/ (* f 3 div-minor) num-rows-adj))) (< y div-major-2))
              (q/with-fill (ja-col-vec 0)
                (q/ellipse (w x) (h y) (w r2) (w r2)))))


          (> y div-major-2)
          (do
            (q/with-fill (ja-col-vec 3) 
              (q/ellipse (w x) (h y) (w r1) (w r1)))
            ;; inner
            (cond
              (< y (+ div-major-2 (/ (* f div-minor) num-rows-adj)))
              (q/with-fill (ja-col-vec 0)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ div-major-2 (/ (* f div-minor) num-rows-adj))) (< y (+ div-major-2 (/ (* f 2 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 1)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ div-major-2 (/ (* f 2 div-minor) num-rows-adj))) (< y (+ div-major-2 (/ (* f 3 div-minor) num-rows-adj))))
              (q/with-fill (ja-col-vec 2)
                (q/ellipse (w x) (h y) (w r2) (w r2)))
              (and (> y (+ div-major-2 (/ (* f 3 div-minor) num-rows-adj))) (< y (+ div-major-2 (/ (* f 4 div-minor)))) num-rows-adj)
              (q/with-fill (ja-col-vec 3)
                (q/ellipse (w x) (h y) (w r2) (w r2)))))

          )))))
