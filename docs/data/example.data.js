// example.data.js

export default {
    load() {
        return {
            data: [
                // to km
                {
                    id: "m-to-km",
                    tag: "length",
                    meta: {
                        title: "m to Km",
                        desc: "Convert Meter to Kilometer",
                    },
                    opt1: ["m", "km", "cm", "mm"],
                    opt2: ["km", "m", "cm", "mm"],
                }, {
                    id: "cm-to-km",
                    tag: "length",
                    meta: {
                        title: "m to Km",
                        desc: "Convert Meter to Kilometer",
                    },
                    opt1: ["cm", "km", "m", "mm"],
                    opt2: ["km", "m", "cm", "mm"],
                }, {
                    id: "mm-to-km",
                    tag: "length",
                    meta: {
                        title: "m to Km",
                        desc: "Convert Meter to Kilometer",
                    },
                    opt1: ["mm", "m", "km", "cm"],
                    opt2: ["km", "m", "cm", "mm"],
                },
                // to m
                {
                    id: "km-to-m",
                    tag: "length",
                    meta: {
                        title: "Km to m",
                        desc: "Convert Kilometer to Meter",
                    },
                    opt1: ["km", "m", "cm", "mm"],
                    opt2: ["m", "km", "cm", "mm"],
                }, {
                    id: "cm-to-m",
                    tag: "length",
                    meta: {
                        title: "cm to m",
                        desc: "Convert Centimeter to Meter",
                    },
                    opt1: ["cm", "km", "m", "mm"],
                    opt2: ["m", "km", "cm", "mm"],
                }, {
                    id: "mm-to-m",
                    tag: "length",
                    meta: {
                        title: "cm to m",
                        desc: "Convert Centimeter to Meter",
                    },
                    opt1: ["mm", "cm", "km", "m"],
                    opt2: ["m", "km", "cm", "mm"],
                },
                // to cm
                {
                    id: "km-to-cm",
                    tag: "length",
                    meta: {
                        title: "km to cm",
                        desc: "Convert Centimeter to Meter",
                    },
                    opt1: ["km", "km", "m", "mm"],
                    opt2: ["cm", "km", "cm", "mm"],
                }, {
                    id: "m-to-cm",
                    tag: "length",
                    meta: {
                        title: "cm to m",
                        desc: "Convert Centimeter to Meter",
                    },
                    opt1: ["m", "km", "cm", "mm"],
                    opt2: ["cm", "km", "cm", "mm"],
                }, {
                    id: "mm-to-cm",
                    tag: "length",
                    meta: {
                        title: "cm to m",
                        desc: "Convert Centimeter to Meter",
                    },
                    opt1: ["mm", "km", "m", "cm"],
                    opt2: ["cm", "km", "m", "cm"],
                },
            ],
        }
    }
}