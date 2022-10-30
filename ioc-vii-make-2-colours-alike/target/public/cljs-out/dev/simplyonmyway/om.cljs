(ns simplyonmyway.om
  (:require
   [simplyonmyway.randomutils :as r]
   [quil.core :as q :include-macros true]
   [quil.middleware :as m]
   [simplyonmyway.dynamic :as dynamic]))

(def yheight 1000)
(def xwidth (* yheight 1.5))

(defn ^:export run-sketch []
  (q/defsketch om
    :host "om"
    :size [xwidth yheight]
    :renderer :p2d
    :setup dynamic/setup
    :update dynamic/update-state
    :draw dynamic/draw
    :middleware [m/fun-mode]
    :settings #(q/smooth 4) 
    ))

